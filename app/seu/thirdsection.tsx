import React from 'react'
import Sendrequest from './sendrequest'
import Image from 'next/image'
import Contacts from './contacts'
import "./thirdsection.css"
const thirdsection = () => {
  return (
    <div className='thirdsection'>
        <Contacts></Contacts>
        <p className='thirdsectiontext'>At Georgian National University SEU, we take pride in the broad range and high quality of our teaching programs by creating a modern environment that makes realization of personal skills of our students possible. We follow international standards of education, while providing an academic space for facilitating success, building the civil society through national values and realizing the national and international objective of the educational institution in promoting cultural and intellectual awareness. In developing new ideas and promoting lasting knowledge we are creating an academic environment where outstanding students and scholars from around the world can be inspired to excel in their programs of study and research. Partnerships with both local and global communities allow SEU to share knowledge, debate and deliver long-lasting outcomes.
</p>
        <Sendrequest></Sendrequest>
        <Image src="../Rectangle 64.svg" alt="" width={670} height={229}></Image>
    </div>

  )
}

export default thirdsection