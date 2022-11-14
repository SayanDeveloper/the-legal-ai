import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import {Swiper, SwiperSlide} from "swiper/react"
import { Navigation } from 'swiper'
import "swiper/css"
import 'swiper/css/navigation';
import Card from './Card'



const Section2 = () => {
    return (
        <Swiper 
            grabCursor={true}
            modules={[Navigation]}
            className="mySwiper"
            slidesPerView={3}
            navigation
            spaceBetween={20}
        >
            <SwiperSlide>
                <Card 
                    heading="Mängel der Unterkunft"
                    subtext="Bitte fülle diesen Fragebogen aus, wenn Du mit Reisemängeln jeder Art zu kämpfen hattest und Deinen Aufenthalt wie geplant fortgesetzt hast.
                    Falls Du auch Probleme mit Deiner Flugreise hattest, kannst Du hier ebenfalls Angaben machen."
                    imgSrc="https://media-public.canva.com/1E_8U/MACy4f1E_8U/6/t.png" />
            </SwiperSlide>
            <SwiperSlide>
                <Card
                    heading="Stornierung der Reise"
                    subtext="Bitte fülle diesen Fragebogen aus, wenn Du Deine Reise vor Reiseantritt storniert hast (sogenannter Rücktritt von der Reise gem. § 651h BGB). Du bist hier auch richtig, wenn Du die Reise wegen angekündigter Reisemängel gar nicht erst angetreten oder abgebrochen hast (sogenannte Kündigung der Reise gem. §651n BGB)." 
                    imgSrc="https://media-public.canva.com/q81f0/MAEqydq81f0/1/t.png" />
            </SwiperSlide>
            <SwiperSlide>
                <Card
                    heading="Kreuzfahrt"
                    subtext="Bitte fülle diesen Fragebogen aus, wenn Du oder der Reiseveranstalter die Kreuzfahrt storniert hat oder während Deiner Kreuzfahrt Reisemängel auftraten. "
                    imgSrc="https://media-public.canva.com/aEjl4/MAEuopaEjl4/1/t.png" />
            </SwiperSlide>
            <SwiperSlide>
                <Card
                    heading="Flug"
                    subtext="Bitte fülle diesen Fragebogen aus, wenn Du von einer Flugverspätung oder - ausfall betroffen warst oder wenn Dir eine Beförderung untersagt wurde. "
                    imgSrc="https://media-public.canva.com/8OLVE/MAEsIB8OLVE/1/t.png" />
            </SwiperSlide>
            <SwiperSlide>
                <Card
                    heading="Gepäck"
                    subtext="Bitte füllen Sie diesen Fragebogen aus, wenn Sie von Kreuzfahrtproblemen betroffen waren. "
                    imgSrc="https://media-public.canva.com/S0XDM/MAEov1S0XDM/1/t.png" />
            </SwiperSlide>
        </Swiper>
    )
}

export default Section2
