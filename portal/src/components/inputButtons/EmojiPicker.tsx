import React from "react";
import { EmojiData, NimblePicker } from "emoji-mart";
import data from "emoji-mart/data/apple.json";
import "./emojiPicker.css";

interface IEmojiPicker {
  addEmoji: (item: EmojiData) => void;
  wrapperRef: React.RefObject<HTMLDivElement>;
}

export default function EmojiPicker({ addEmoji, wrapperRef }: IEmojiPicker): JSX.Element {
  return (
    <div className="emoji-picker" ref={wrapperRef}>
      <NimblePicker
        set="google"
        data={data}
        autoFocus
        sheetSize={32}
        perLine={15}
        exclude={["flags"]}
        title=""
        onSelect={(item) => addEmoji(item)}
      />
    </div>
  );
}
