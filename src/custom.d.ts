type RecordItem = {
  tags: string[];
  notes: string;
  type: string;
  amount: number;
  createAt?: Date;
};
type Tag = {
  id: string;
  name: string;
}

type TagListModel = {
    data: Tag[]
    fetch: () => Tag[]
    create: (name:string) => 'success' | 'duplicated'// 联合类型
  update: (id: string, name: string) => 'success' | 'duplicated' | 'not found'
  remove:(id: string) =>boolean
  save: () => void
}
interface Window{
  tagList: Tag[]
  createTag:(name: string) =>void
}