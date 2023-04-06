interface DateOptions {
  day: "numeric",
  weekday: "short",
  month: "short",
}

interface TimeOptions {
  minute: "numeric",
  hour: "numeric",
  hour12: boolean,
}

export function formatDateString(dateString: string): string {
  const options: DateOptions = {
    weekday: "short",
    month: "short",
    day: "numeric"
  };
  const date = new Date(dateString)
  const formattedDate = date.toLocaleDateString("en-US", options);
  return formattedDate
}

export function formatTimeString(timeString: string): string {
  const [hours, minutes] = timeString.split(":");
  const date = new Date();
  date.setHours(parseInt(hours), parseInt(minutes));

  const options: TimeOptions = { hour: "numeric", minute: "numeric", hour12: true };
  const formattedTime = date.toLocaleTimeString("en-US", options);
  return formattedTime;
}