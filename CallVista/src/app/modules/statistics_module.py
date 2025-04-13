import pandas as pd
import matplotlib.pyplot as plt

def generate_statistics(speaker_segments):
    print("\nGenerating conversation statistics...")

    df = pd.DataFrame(speaker_segments)

    total_duration = df['duration_sec'].sum()
    customer_talk = df[df['speaker'] == 'Customer']['duration_sec'].sum()
    agent_talk = df[df['speaker'] == 'Agent']['duration_sec'].sum()
    silence_duration = total_duration - (customer_talk + agent_talk)

    speaker_pct = df.groupby('speaker')['duration_sec'].sum() / total_duration * 100
    turn_counts = df['speaker'].value_counts()
    avg_turn_duration = df.groupby('speaker')['duration_sec'].mean()

    df['word_count'] = df['transcript'].apply(lambda x: len(str(x).split()))
    avg_words_per_turn = df.groupby('speaker')['word_count'].mean()

    stats = {
        'total_duration_sec': total_duration,
        'customer_talk_sec': customer_talk,
        'agent_talk_sec': agent_talk,
        'silence_sec': max(0, silence_duration),
        'speaker_distribution_pct': speaker_pct,
        'turn_counts': turn_counts,
        'avg_turn_duration_sec': avg_turn_duration,
        'avg_words_per_turn': avg_words_per_turn
    }

    return stats, df

def visualize_statistics(stats):
    print("\nVisualizing conversation metrics...")

    plt.figure(figsize=(15, 10))

    plt.subplot(2, 2, 1)
    stats['speaker_distribution_pct'].plot.pie(autopct='%1.1f%%', startangle=90)
    plt.title('Speaker Talk Time Distribution')

    plt.subplot(2, 2, 2)
    stats['avg_turn_duration_sec'].plot.bar()
    plt.title('Average Turn Duration (seconds)')
    plt.ylabel('Seconds')

    plt.subplot(2, 2, 3)
    stats['turn_counts'].plot.bar()
    plt.title('Number of Speaking Turns')
    plt.ylabel('Count')

    plt.subplot(2, 2, 4)
    stats['avg_words_per_turn'].plot.bar()
    plt.title('Average Words per Turn')
    plt.ylabel('Word Count')

    plt.tight_layout()
    plt.show()
