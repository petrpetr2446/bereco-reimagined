"""
generate_image.py — call gpt-image-2 and save the result to disk.

Usage:
  python tools/generate_image.py \
    --prompt "..." \
    --output "bereco-reimagined/src/assets/ss-hero.png" \
    --size landscape \
    --quality high
"""

import argparse
import base64
import os
import sys
from pathlib import Path

def load_api_key() -> str:
    key = os.environ.get("OPENAI_API_KEY")
    if key:
        return key

    env_candidates = [
        Path(__file__).parent.parent / ".env",
        Path(__file__).parent.parent / "bereco-reimagined" / ".env",
    ]
    for env_path in env_candidates:
        if env_path.exists():
            from dotenv import dotenv_values
            values = dotenv_values(env_path)
            key = values.get("OPENAI_API_KEY")
            if key:
                return key

    print("ERROR: OPENAI_API_KEY not found in environment or .env file.")
    print("Add it to the project root .env:  OPENAI_API_KEY=sk-...")
    sys.exit(1)


SIZE_MAP = {
    "landscape": "1536x1024",
    "square":    "1024x1024",
    "portrait":  "1024x1536",
}


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--prompt",  required=True)
    parser.add_argument("--output",  required=True)
    parser.add_argument("--size",    default="landscape", choices=SIZE_MAP.keys())
    parser.add_argument("--quality", default="high",      choices=["high", "medium", "low"])
    args = parser.parse_args()

    api_key = load_api_key()

    from openai import OpenAI
    client = OpenAI(api_key=api_key)

    size = SIZE_MAP[args.size]

    response = client.images.generate(
        model="gpt-image-2",
        prompt=args.prompt,
        size=size,
        quality=args.quality,
        response_format="b64_json",
        n=1,
    )

    image_data = base64.b64decode(response.data[0].b64_json)

    output_path = Path(args.output)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_bytes(image_data)

    size_kb = len(image_data) // 1024
    print(f"✓ {output_path.name} saved ({size_kb} KB) → {output_path}")


if __name__ == "__main__":
    main()
