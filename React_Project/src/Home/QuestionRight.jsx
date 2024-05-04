import React from 'react'

import Accordion from '../Accardion';

const QuestionRight = () => {
    const Data = [
        { index:'01',
            title:'How much time does it take?',
            desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        { index:'02',
            title:'What is your class naming convention?',
            desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        { index:'03',
            title:'How do you communicate?',
            desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        { index:'04',
            title:'I have a bigger project. Can you handle it?',
            desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        { index:'05',
            title:'What is your class naming convention?',
            desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
    ]
  return (
    <>
    {
        Data.map(({index,title,desc})=>{
            return <Accordion index={index} title={title} desc={desc}/>
         
        })
    }
    </>
  )
}

export default QuestionRight