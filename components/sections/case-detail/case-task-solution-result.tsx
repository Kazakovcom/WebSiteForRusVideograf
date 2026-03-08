import { CaseItem } from '@/types/case';
import { Section } from '@/components/ui/section';
import { Card } from '@/components/ui/card';

interface Props {
  item: CaseItem;
}

export function CaseTaskSolutionResult({ item }: Props) {
  return (
    <Section>
      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
        <Card><h3>Task</h3><p className="muted">{item.task}</p></Card>
        <Card><h3>Solution</h3><p className="muted">{item.solution}</p></Card>
        <Card><h3>Result</h3><p className="muted">{item.result}</p></Card>
      </div>
    </Section>
  );
}
