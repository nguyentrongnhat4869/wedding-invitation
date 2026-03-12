"use client"

import { useRef, useState, useEffect } from "react"

export default function SpotifyButton({
  songTitle,
  artist,
  albumArt,
  flacSrc
}: {
  songTitle: string
  artist: string
  albumArt: string
  flacSrc: string
}) {

  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)

  const toggleMusic = () => {
  if (!audioRef.current) return

  // bỏ mute khi user click
  audioRef.current.muted = false

  if (playing) {
    audioRef.current.pause()
  } else {
    audioRef.current.play()
  }

  setPlaying(!playing)
}

  // ⭐ autoplay khi load web
  useEffect(() => {
  const startMusic = () => {
    if (audioRef.current) {
      audioRef.current.muted = false
      audioRef.current.play()
      setPlaying(true)
    }

    document.removeEventListener("click", startMusic)
  }

  document.addEventListener("click", startMusic)

  return () => {
    document.removeEventListener("click", startMusic)
  }
}, [])

  return (
    <div
      onClick={toggleMusic}
      className="cursor-pointer flex items-center gap-3 bg-black/60 text-white p-3 rounded-xl"
    >
      <img src={albumArt} className="w-10 h-10 rounded-md" />
      <div className="text-sm">
        <div>{songTitle}</div>
        <div className="text-xs opacity-70">{artist}</div>
      </div>

      <audio ref={audioRef} src={flacSrc} loop />
    </div>
  )
}