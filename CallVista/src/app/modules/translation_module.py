from transformers import MarianMTModel, MarianTokenizer

def load_translation_model():
    print("Loading Hindi-English translation model...")
    model_name = "Helsinki-NLP/opus-mt-hi-en"
    tokenizer = MarianTokenizer.from_pretrained(model_name)
    model = MarianMTModel.from_pretrained(model_name)
    return model, tokenizer

def translate_transcripts(speaker_segments, model, tokenizer):
    print("Translating Hindi transcripts to English...")

    for segment in speaker_segments:
        if segment["transcript"] not in ["[Inaudible]", "[Transcription error]"]:
            try:
                batch = tokenizer([segment["transcript"]], return_tensors="pt", padding=True)
                gen = model.generate(**batch)
                segment["translation"] = tokenizer.batch_decode(gen, skip_special_tokens=True)[0]
            except Exception as e:
                print(f"Translation error: {e}")
                segment["translation"] = "[Translation error]"
        else:
            segment["translation"] = segment["transcript"]

    return speaker_segments
