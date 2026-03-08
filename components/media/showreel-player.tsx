import { ResponsiveVideo } from './responsive-video';

interface ShowreelPlayerProps {
  poster: string;
  note: string;
}

export function ShowreelPlayer({ poster, note }: ShowreelPlayerProps) {
  return <ResponsiveVideo poster={poster} title="Showreel" placeholderNote={note} />;
}
