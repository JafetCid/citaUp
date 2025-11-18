'use client'
import React, { useState } from 'react'

import { appointmentForm } from '@/lib/validations/appointmentForm'
import { AppointmentsForm } from '@/types/validations/appointmentForm/appointment'
import CitaModal from '@/components/CitaModal'
import Appoitments from '@/components/Appoitments'

export default function page() {

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<AppointmentsForm>>({});
  const [formData, setFormData] = useState<AppointmentsForm>({
    name: '', email: '', phoneNumber: '', date: '', hour: '', service: '', comments: ''
  });

  const handleInputChange = (value: string | number, field: keyof AppointmentsForm) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const validationErrors = appointmentForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {

      setIsSubmitting(true);

      // Simular envío de formulario
      await new Promise(resolve => setTimeout(resolve, 2000));

      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  }

  if (isSubmitted) {
    return <CitaModal
      date={formData.date}
      hour={formData.hour}
      service={formData.service}
      onClick={() => {
        setIsSubmitted(false)
        setFormData({ name: '', email: '', phoneNumber: '', date: '', hour: '', service: '', comments: '' })
      }}
    />
  }

  return (
    <Appoitments
      style="justify-center"
      contatcStyle="hidden"
      isSubmitting={isSubmitting}
      handleSubmit={handleSubmit}
      handleInputChange={handleInputChange}
      formData={formData}
      errors={errors}
    />
  )
}
