export const formatTime = (_seconds) => {
  const [hours, minutes, seconds] = convertSeconds(_seconds);
  return [
    hours ? hours.toString().padStart(2, '0') : null,
    minutes.toString().padStart(2, '0'),
    seconds.toString().padStart(2, '0')
  ].filter(el => el !== null).join(':');
}

export const timePattern = (_seconds, pattern = "h:m:s") => {
  const [hours, minutes, seconds] = convertSeconds(_seconds);
  return pattern.replace("h", hours.padStart(2, '0'))
                .replace("m", minutes.padStart(2, '0'))
                .replace("s", seconds.padStart(2, '0'));
}

export const convertSeconds = (_seconds) => {
  const hours = Math.floor(_seconds / 60 / 60);
  const minutes = Math.floor(_seconds / 60) - (hours * 60);
  const seconds = _seconds % 60;

  return [hours.toString(), minutes.toString(), seconds.toString()];
}