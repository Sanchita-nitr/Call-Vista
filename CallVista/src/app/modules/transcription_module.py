import os

def transcribe_segments(speaker_segments, model):
    print("Transcribing audio segments in Hindi using Whisper...")

    for segment in speaker_segments:
        try:
            temp_file = "temp_segment.wav"
            segment["audio_chunk"].export(temp_file, format="wav")
            result = model.transcribe(temp_file, language="hi", fp16=False)
            segment["transcript"] = result["text"].strip()
            os.remove(temp_file)
        except Exception as e:
            print(f"Error transcribing segment: {str(e)}")
            segment["transcript"] = "[Transcription error]"

    return speaker_segments
