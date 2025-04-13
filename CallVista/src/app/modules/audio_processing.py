import os
from pydub import AudioSegment
from tkinter import Tk
from tkinter.filedialog import askopenfilename

def select_audio_file():
        print("Please select your Hindi call recording file (supported formats: wav, mp3, m4a, aac, flac)")
        Tk().withdraw()  # Hide the root Tkinter window
        file_name = askopenfilename(filetypes=[("Audio Files", "*.wav *.mp3 *.m4a *.aac *.flac")])
        if not file_name:
            raise FileNotFoundError("No file was selected.")
        return file_name

def convert_to_wav(file_name):
    file_extension = os.path.splitext(file_name)[1].lower()
    if file_extension != '.wav':
        print(f"Converting {file_extension} file to WAV format...")
        audio = AudioSegment.from_file(file_name)
        wav_file = os.path.splitext(file_name)[0] + '.wav'
        audio.export(wav_file, format="wav", parameters=["-ac", "1", "-ar", "16000"])
        print(f"Conversion complete: {wav_file}")
        return wav_file
    return file_name
