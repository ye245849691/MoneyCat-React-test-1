import React, {FC} from 'react';
import {useParams} from 'react-router-dom'
import {useTags} from '../useTags';

type Param={
  id: string;
}

const Tag: FC = ()=>{
  const {findTag}= useTags()
  const {id} = useParams<Param>()

  return (
    <div>
      {findTag(parseInt(id)).name}
    </div>
  )
}

export {Tag}