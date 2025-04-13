import torch
import whisper

def load_whisper_model():
    print("Loading Whisper model...")
    device = "cuda" if torch.cuda.is_available() else "cpu"
    return whisper.load_model("medium", device=device)
