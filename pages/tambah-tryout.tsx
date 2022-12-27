import { SubmitHandler, useForm } from 'react-hook-form'
import Input from '../components/Common/Input'
import Header from '../components/Header'
import DateInput from '../components/Common/DateInput'
import { checkFormError } from '../utils/checkFormError'
import { replaceSlashWithDash } from '../utils/dateHelper'
import * as tryoutService from '../lib/tryout.service'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { useState } from 'react'
import Link from 'next/link'

import 'react-datepicker/dist/react-datepicker.css'
import Spinner from '../components/Common/Spinner'

export interface FormInputs {
  penyelenggara: string
  mulaiPendaftaranDate: Date
  akhirPendaftaranDate: Date
  mulaiPengerjaanDate: Date
  akhirPengerjaanDate: Date
  link: string
}

const TambahTryout = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState<string>()
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<FormInputs>()

  const onSubmit: SubmitHandler<FormInputs> = async ({
    penyelenggara,
    link,
    mulaiPendaftaranDate,
    akhirPendaftaranDate,
    mulaiPengerjaanDate,
    akhirPengerjaanDate,
  }) => {
    setIsLoading(true)
    const mulaiPendaftaran = replaceSlashWithDash(
      mulaiPendaftaranDate.toLocaleDateString(),
    )
    const akhirPendaftaran = replaceSlashWithDash(
      akhirPendaftaranDate.toLocaleDateString(),
    )
    const mulaiPengerjaan = replaceSlashWithDash(
      mulaiPengerjaanDate.toLocaleDateString(),
    )
    const akhirPengerjaan = replaceSlashWithDash(
      akhirPengerjaanDate.toLocaleDateString(),
    )

    await tryoutService.uploadTryout({
      penyelenggara,
      link,
      mulaiPendaftaran,
      akhirPendaftaran,
      mulaiPengerjaan,
      akhirPengerjaan,
      status: 'needAction',
    })

    setIsLoading(false)
    setSuccessMessage(
      'Makasih udah menambahkan info tryout baru! Info yang kamu tambahkan bakal dikonfirmasi dulu oleh admin sebelum dipublish.',
    )
    reset()
  }

  return (
    <div className="bg-canvas min-h-screen">
      <Header
        title="infoteoh"
        desc="Website buat para klean yang pengen nyari info TO gratis"
      />
      <main className="mt-16 p-4">
        <h2 className="text-lg">Tambah info try-out baru</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
          <Input
            id="penyelenggara"
            register={register}
            labelText="Penyelenggara"
            placeholder="ex. Pahamify, Ruangguru #15"
            errors={errors}
          />

          <Input
            id="link"
            register={register}
            labelText="Link postingan instagram / twitter"
            placeholder="url"
            errors={errors}
          />

          <div className="mt-4">
            <label>Deadline pendaftaran</label>
            <DateInput
              control={control}
              id="mulaiPendaftaranDate"
              placeholder="dari tanggal"
            />
            <DateInput
              control={control}
              id="akhirPendaftaranDate"
              placeholder="sampai tanggal"
              addMarginTop
            />
            {checkFormError(
              errors.mulaiPendaftaranDate,
              errors.akhirPendaftaranDate,
            ) && <span className="text-xs">lengkapi data ini</span>}
          </div>

          <div className="mt-4">
            <label>Deadline pengerjaan</label>
            <DateInput
              control={control}
              id="mulaiPengerjaanDate"
              placeholder="dari tanggal"
            />
            <DateInput
              control={control}
              id="akhirPengerjaanDate"
              placeholder="sampai tanggal"
              addMarginTop
            />
            {checkFormError(
              errors.mulaiPengerjaanDate,
              errors.akhirPengerjaanDate,
            ) && <span className="text-xs">lengkapi data ini</span>}
          </div>

          <button
            className="mt-4 min-w-[80px] bg-primary text-canvas px-3 py-2 rounded"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? <Spinner /> : 'Submit'}
          </button>
          {Object.keys(errors).length !== 0 && (
            <span className="ml-4 text-xs">
              data masih ada yang belum lengkap
            </span>
          )}
        </form>
        {successMessage && <p className="mt-4">{successMessage}</p>}
        <div className="mt-10 flex items-center">
          <IoIosArrowRoundBack className="text-lg" />
          <Link href="/">halaman utama</Link>
        </div>
      </main>
    </div>
  )
}

export default TambahTryout
