import {useEffect, useState} from 'react';
import {createId} from '../lib/createId';
import {useHistory} from 'react-router-dom';
import {useUpdate} from './useUpdate';


const useTags = () => {
  const [tags, setTags] = useState<{ id: number, name: string }[]>([]);
  useEffect(() => {
    let localTag = JSON.parse(window.localStorage.getItem('tags') || '[]');
    if (localTag.length <= 0) {
      localTag = [
        {id: createId(), name: '衣'},
        {id: createId(), name: '食'},
        {id: createId(), name: '住'},
        {id: createId(), name: '行'}
      ];
    }
    setTags(localTag);
  }, []);
  useUpdate(() => {
    window.localStorage.setItem('tags', JSON.stringify(tags));
  }, tags);
  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
  const addTag = () => {
    const tagName = window.prompt('请输入新的标签名');
    const tagNames = tags.map(tag => tag.name);
    if(tagName === null){
      return;
    }else if (tagName === '' ) {
      window.alert('标签名不能为空');
      return;
    } else if (tagNames.indexOf(tagName) >= 0) {
      window.alert('该标签名已存在');
      return;
    } else {
      setTags([...tags, {id: createId(), name: tagName}]);
    }

  };
  const history = useHistory();
  const updateTag = (id: number, name: string) => {
    const tagsIds = tags.map(tag=>tag.id)
    const tagNames = tags.map(tag => tag.name);
    if (tagNames.indexOf(name) >= 0 && tagNames.indexOf(name) !== tagsIds.indexOf(id)) {
        window.alert('该标签名已存在,请重新输入');
        history.goBack();
        return;
      }
    setTags(tags.map(tag => {
      if (tag.id === id) {
        return {id, name};
      } else {
        return tag;
      }
    }));
  };

  const deleteTag = (id: number) => {
    setTags(tags.filter(tag => tag.id !== id));
    window.alert('删除成功！');
    history.goBack();

  };
  const getNames = (ids:number[])=>{
    return tags.filter(tag=>ids.indexOf(tag.id)>=0).map(tag=>tag.name).join('，');
  }
  return {tags, setTags, findTag, updateTag, deleteTag, addTag,getNames};
};

export {useTags};