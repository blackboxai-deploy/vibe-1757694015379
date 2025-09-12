export interface SlideData {
  id: number;
  title: string;
  subtitle?: string;
  content: SlideContent;
  type: 'title' | 'content' | 'diagram' | 'table' | 'list';
}

export interface SlideContent {
  text?: string[];
  items?: string[];
  table?: TableData;
  diagram?: DiagramData;
  visual?: VisualElement[];
}

export interface TableData {
  headers: string[];
  rows: string[][];
}

export interface DiagramData {
  steps: DiagramStep[];
  type: 'flow' | 'process';
}

export interface DiagramStep {
  id: string;
  label: string;
  description?: string;
  position: { x: number; y: number };
  connections?: string[];
}

export interface VisualElement {
  type: 'icon' | 'highlight' | 'warning';
  content: string;
  style?: string;
}