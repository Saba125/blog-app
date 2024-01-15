import { formatDistanceToNowStrict } from "date-fns";

export function formatTime(from: Date) {
  return formatDistanceToNowStrict(from, { addSuffix: true });
}
