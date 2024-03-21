
'use client'

import React, { useContext, useEffect } from 'react'
import { PersonaForm } from './persona-form'
import { CashForm } from './cash-form'
import { CheckoutContext } from '@/checkout-context'
import { AnimatePresence, motion } from 'framer-motion';
import { donationType } from '@/types'

export const CashDonation = () => {

    const { hasRegistered, setDonationType } = useContext(CheckoutContext);

    useEffect(() => {
        setDonationType(donationType.efectivo);
    }, [])

    return (
        <div className="md:w-[500px] max-w-full mx-auto">
            <AnimatePresence>
                {
                    hasRegistered ? (
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 100 }}
                        >
                            <CashForm />
                        </motion.div>
                    ) : (
                        <PersonaForm />
                    )
                }
            </AnimatePresence>
        </div>
    )
}
