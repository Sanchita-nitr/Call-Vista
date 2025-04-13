import os
import IPython.display as ipd
from modules.audio_processing import upload_audio_file, convert_to_wav
from modules.whisper_module import load_whisper_model
from modules.translation_module import load_translation_model, translate_transcripts
from modules.transcription_module import transcribe_segments
from modules.speaker_diarization import split_speakers
from modules.statistics_module import generate_statistics, visualize_statistics
try:
    from google.colab import files
except ImportError:
    files = None

def save_results(speaker_segments, stats):
    hindi_transcript = "# Hindi Transcript\n\n"
    parallel_transcript = "# Hindi-English Parallel Transcript\n\n"

    for segment in speaker_segments:
        hindi_transcript += f"**{segment['speaker']}** ({segment['duration_sec']:.1f}s): {segment['transcript']}\n\n"
        parallel_transcript += f"**{segment['speaker']}** ({segment['duration_sec']:.1f}s):\n- Hindi: {segment['transcript']}\n- English: {segment['translation']}\n\n"

    stats_report = "# Conversation Statistics\n\n"
    stats_report += f"Total Duration: {stats['total_duration_sec']:.1f} seconds\n"
    stats_report += f"Customer Talk Time: {stats['customer_talk_sec']:.1f} seconds ({stats['speaker_distribution_pct']['Customer']:.1f}%)\n"
    stats_report += f"Agent Talk Time: {stats['agent_talk_sec']:.1f} seconds ({stats['speaker_distribution_pct']['Agent']:.1f}%)\n"
    stats_report += f"Approximate Silence: {stats['silence_sec']:.1f} seconds\n\n"
    stats_report += f"Customer Turns: {stats['turn_counts']['Customer']}\n"
    stats_report += f"Agent Turns: {stats['turn_counts']['Agent']}\n\n"
    stats_report += f"Average Customer Turn Duration: {stats['avg_turn_duration_sec']['Customer']:.1f} seconds\n"
    stats_report += f"Average Agent Turn Duration: {stats['avg_turn_duration_sec']['Agent']:.1f} seconds\n\n"
    stats_report += f"Average Words per Customer Turn: {stats['avg_words_per_turn']['Customer']:.1f}\n"
    stats_report += f"Average Words per Agent Turn: {stats['avg_words_per_turn']['Agent']:.1f}\n"

    with open("hindi_transcript.txt", "w", encoding="utf-8") as f:
        f.write(hindi_transcript)

    with open("parallel_transcript.txt", "w", encoding="utf-8") as f:
        f.write(parallel_transcript)

    print("\nDownloading result files...")
    if files:
        files.download("hindi_transcript.txt")
        files.download("parallel_transcript.txt")
        files.download("conversation_stats.txt")
    else:
        print("File download is only supported in Google Colab. Files are saved locally.")
    files.download("hindi_transcript.txt")
    files.download("parallel_transcript.txt")
    files.download("conversation_stats.txt")

def main():
    print("Enhanced Hindi Call Analytics Tool")
    print("=================================")

    input_file = upload_audio_file()
    wav_file = convert_to_wav(input_file)

    print("\nPlaying audio for verification:")
    ipd.display(ipd.Audio(wav_file))

    whisper_model = load_whisper_model()
    translation_model, tokenizer = load_translation_model()

    speaker_segments = split_speakers(wav_file)
    speaker_segments = transcribe_segments(speaker_segments, whisper_model)
    speaker_segments = translate_transcripts(speaker_segments, translation_model, tokenizer)

    stats, _ = generate_statistics(speaker_segments)
    visualize_statistics(stats)
    save_results(speaker_segments, stats)

    print("\nCleaning up temporary files...")
    if os.path.exists(wav_file) and wav_file != input_file:
        os.remove(wav_file)

if __name__ == "__main__":
    main()
