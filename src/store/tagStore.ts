import tagListModel from "@/models/tagListModel";

export default {
    //  tag store
  tagList: tagListModel.fetch(),
  findTag (id: string){
    return this.tagList.filter((t) => t.id === id)[0];
  },
  createTag: (name: string) => {
    const message = tagListModel.create(name);
    if (message === "duplicated") {
      window.alert("标签名重复了，请重新操作");
    } else if (message === "success") {
      window.alert("添加标签名成功！");
    }
  },
  removeTag: (id: string) => {
    return tagListModel.remove(id);
  },
  updateTag: (id: string, name: string) => {
    return tagListModel.update(id, name);
  },


}