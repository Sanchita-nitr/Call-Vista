from pydub import AudioSegment
from pydub.silence import split_on_silence

def split_speakers(audio_file, min_silence=800, silence_thresh=-40, keep_silence=300):
    print("Splitting audio based on silence to approximate speaker turns...")
    sound = AudioSegment.from_wav(audio_file).normalize()

    chunks = split_on_silence(
        sound,
        min_silence_len=min_silence,
        silence_thresh=silence_thresh,
        keep_silence=keep_silence,
        seek_step=50
    )

    min_chunk_length = 1000
    combined_chunks, temp_chunk = [], None

    for chunk in chunks:
        if temp_chunk is None:
            temp_chunk = chunk
        else:
            if len(temp_chunk) < min_chunk_length or len(chunk) < min_chunk_length:
                temp_chunk += chunk
            else:
                combined_chunks.append(temp_chunk)
                temp_chunk = chunk

    if temp_chunk:
        combined_chunks.append(temp_chunk)

    speaker_segments = []
    for i, chunk in enumerate(combined_chunks):
        speaker = "Customer" if i % 2 == 0 else "Agent"
        speaker_segments.append({
            "speaker": speaker,
            "duration_sec": len(chunk) / 1000,
            "audio_chunk": chunk
        })

    print(f"Created {len(speaker_segments)} speaker segments")
    return speaker_segments
