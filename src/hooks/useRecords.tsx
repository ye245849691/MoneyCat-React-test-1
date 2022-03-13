import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';

export type recordItem = {
  tagIds: number[]
  note: string
  category: '-' | '+',
  amount: number
  createAt: string;
}
//省略createAt
type newRecordItem = Omit<recordItem, 'createAt'>



const useRecords = () => {
  const [records, setRecords] = useState<recordItem[]>([]);
  useEffect(()=>{
    setRecords(JSON.parse(window.localStorage.getItem('records')||'[]'));
  },[])
  useUpdate(()=>{
    window.localStorage.setItem('records',JSON.stringify(records))
  },[records])
  const addRecord=(record:newRecordItem)=>{
    if(record.amount<=0){
      alert('请输入金额')
      return false;
    }else{
      const newRecord = {...record,createAt: (new Date()).toISOString()}
      setRecords([...records,newRecord])
      return true;
    }

  }
  return {records, setRecords,addRecord}
};

export {useRecords};