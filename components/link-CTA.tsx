import { Button } from '@mui/material'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { TextField } from '@mui/material'
import router from 'next/router'

import { RiLoader4Fill } from 'react-icons/ri'
import { client } from '@/graphql/client'
import { CreateInterestedIndividualAndSendEmailDocument } from '../generated'
import { validateEmail } from '@/utils/validateEmail'

const LinkCTA = () => {
  const { t } = useTranslation()

  const [linkClicked, setLinkClicked] = useState(false)
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const createInterestedIndividual = async () => {
    const individual = await client.mutate({
      mutation: CreateInterestedIndividualAndSendEmailDocument,
      variables: {
        email,
      },
    })
    if (individual.data) {
      setLoading(false)
      setEmail('')
      document.location.href = 'https://google.com'
    }
    if (individual.errors) {
      setLoading(false)
      setEmail('')
      document.location.href = 'https://google.com'
    }
  }

  return (
    <div className='flex-1 mobile3:pr-[15px] web:mt-[30px] flex justify-center items-center flex flex-col'>
      <div
        className={
          error
            ? 'p-[2px] bg-[#F0F0F0] relative z-20 mb-[10px] rounded border-[1px] border-solid border-red-500 shadow-xl'
            : 'p-[2px] bg-[#F0F0F0] relative z-20 mb-[10px] rounded border-[1px] border-solid border-[#574499] shadow-xl'
        }
      >
        <TextField
          error={error}
          label={!error ? 'Email' : t('interestedIndividualTextFieldLabel')}
          value={email}
          onChange={(e) => {
            if (validateEmail(e.target.value)) {
              setError(false)
            }
            setEmail(e.target.value)
          }}
          sx={{
            height: '30px',
            backgroundColor: 'white',
            '& .Mui-focused': {
              color: error ? 'black' : '#2F1781 !important',
              '&:after': {
                content: '""',
                borderBottom: error ? '2px solid red' : '2px solid #2F1781',
              },
            },
            '& label.Mui-focused': {
              color: error ? 'red !important' : '#2F1781',
            },
            '& .MuiInputLabel-root': {
              top: '-11px',
              fontSize: 14,
              fontWeight: 700,
              color: error ? '#d32f2f' : '#2F1781',
            },
            '& .MuiTextField-root': {
              height: '30px',
              width: 200,
            },
            '& .MuiInputBase-root': {
              height: '30px',
              width: 200,
              margin: 0,
            },
            '& .MuiFilledInput-input': {
              height: '30px',
              paddingY: 0,
              paddingX: '3px',
              fontSize: '14px',
              position: 'relative',
              top: 3,
            },
          }}
          variant='filled'
        />
      </div>

      {linkClicked && loading ? (
        <Button
          variant='contained'
          className='bg-[#A79DC8] hover:bg-[#2F1781] border-2 border-white border-solid'
          startIcon={<RiLoader4Fill className='animate-spin' />}
        >
          Loading
        </Button>
      ) : (
        <Button
          variant='contained'
          className='bg-[#A79DC8] hover:bg-[#2F1781] border-2 border-white border-solid mobile:text-[14px] mobile2:text-[11px] text-[8px]'
          onClick={() => {
            if (validateEmail(email)) {
              setLinkClicked(true)
              createInterestedIndividual()
            } else if (!validateEmail(email)) {
              setError(true)
            }
          }}
        >
          {t('heroCTA-link')}
        </Button>
      )}
    </div>
  )
}

export default LinkCTA
