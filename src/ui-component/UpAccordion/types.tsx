 export interface UpAccordionProps {
    title: string;
    expanded: string | false;
    children: React.ReactNode;
    onAccordionHandler: (expanded: boolean) => void;

  }