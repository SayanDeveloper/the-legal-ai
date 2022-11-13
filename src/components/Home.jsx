import React from 'react'
import "../styles/main.css"
import banner from "../assets/s2-1.svg"
import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Flex, Image, Text } from '@chakra-ui/react'
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import conny from "../assets/conny.svg"
import mission from "../assets/MISSION.png"
import arpit from "../assets/arpit.png"
import tessia from "../assets/tessia.png"

const Home = () => {
    return (
        <Box className='home'>
            <Box className='landing-banner'>
                <Box>
                    <h2>VERKAUFE DEIN PROBLEM!</h2>
                    <Text as="h1" fontSize="40px" pr="40px"  lineHeight={"1.3em"} mt="20px" mb="30px">
                        Dein Strom- oder Gasvertrag wurde gekündigt?
                    </Text>
                    <p>
                        Du bist unerwartet beim viel teureren Ersatzversorger gelandet? Lass' Dir das nicht gefallen und sichere Dir Deinen Schadensersatz!  Mehr Infos
                    </p>
                    <button>Jetzt kostenlos anfragen</button>
                </Box>
                <img src={banner} alt="banner" />
            </Box>

            <Text fontWeight={600} fontSize="35px" textAlign="center" mt="60px" color="#013852">So funktioniert's </Text>
            <Text w="80%" maxW="1000px" margin="auto" mt="10px" textAlign="center" color="#013852" fontWeight={500} mb="50px">
                Digitale Forderung Deiner Rechte: Mit verständlichen Fragen unterstützt dich LegalAI unkompliziert bei der Forderung Deiner Rechte. Gibst du uns grünes Licht, setzen wir Deine Ansprüche für Dich durch. 
                <br />Hier erfährst du im Detail, wie LegalAI funktioniert.
            </Text>

            <Box w="90%" maxW="1100px" margin="auto">
                <Box py="30px" px="120px" w="90%" boxShadow={"1px 1px 4px #00000044"} margin="auto"
                    borderRadius={"5px"} mb="30px" pos="relative" >
                    <Image src={conny} w="150px" pos="absolute" top="50%" transform={"translateY(-50%)"} left="-60px" />
                    <Text fontWeight={600} fontSize="20px" mb="10px">1. Reisedetails eingeben</Text>
                    Wir prüfen unter Einsatz modernster Technologie sowie mit Hilfe unserer 
                    <br/>
                    Reiserechtsexperten, ob Du einen Anspruch auf Erstattung gegen Deinen Reiseveranstalter hast - wegen Reisemängeln, aufgrund von Urlaubsstornierungen, Flugverspätungen oder anderen reiserechtlichen Problemen. 
                    <br/>
                    Dafür musst Du uns nur ein paar Details zu Deinem Fall über unseren Fragebogen übermitteln. 
                    <br/>
                    Unser Algorithmus ermöglicht es in vielen Fällen, bereits mit Übermittlung Deiner Falldaten zu ermitteln, ob Du einen Anspruch gegen den Reiseveranstalter hast und wenn ja, in welcher Höhe.
                </Box>
                <Box py="30px" px="120px" w="90%" boxShadow={"1px 1px 4px #00000044"} margin="auto"
                    borderRadius={"5px"} mb="30px" pos="relative" >
                    <Image src={conny} w="150px" pos="absolute" top="50%" transform={"translateY(-50%)"} right="-60px" />
                    <Text fontWeight={600} fontSize="20px" mb="10px">2. Erstattung beauftragen</Text>
                    Sollte ein Anspruch bestehen, kannst Du uns nun damit beauftragen, Deinen Anspruch beim Reiseveranstalter durchzusetzen. Falls nötig, verhelfen renommierte Reiserechtsanwälte Dir auch vor Gericht zu Deinem Recht. Wir halten Dich zum Stand des Verfahrens stets auf dem Laufenden.
                    <br/>
                    Bei noch offenen Fragen kontaktieren Dich unsere Rechtsexperten auch telefonisch für ein persönliches Gespräch. Solltest Du beim Ausfüllen des Fragebogens bestimmte Reisedokumente oder weitere Unterlagen (z.B. Beweismittel) noch nicht hochgeladen haben, kannst Du dies bequem nachholen durch Übermittlung der Unterlagen an unsere E-Mail-Adresse info@legalai.io.Sollte ein Anspruch bestehen, kannst Du uns nun damit beauftragen, Deinen Anspruch beim Reiseveranstalter durchzusetzen. Falls nötig, verhelfen renommierte Reiserechtsanwälte Dir auch vor Gericht zu Deinem Recht. Wir halten Dich zum Stand des Verfahrens stets auf dem Laufenden.
                    <br/>
                    Bei noch offenen Fragen kontaktieren Dich unsere Rechtsexperten auch telefonisch für ein persönliches Gespräch. Solltest Du beim Ausfüllen des Fragebogens bestimmte Reisedokumente oder weitere Unterlagen (z.B. Beweismittel) noch nicht hochgeladen haben, kannst Du dies bequem nachholen durch Übermittlung der Unterlagen an unsere E-Mail-Adresse info@legalai.io.
                </Box>
                <Box py="30px" px="120px" w="90%" boxShadow={"1px 1px 4px #00000044"} margin="auto"
                    borderRadius={"5px"} mb="30px" pos="relative" >
                    <Image src={conny} w="150px" pos="absolute" top="50%" transform={"translateY(-50%)"} left="-60px" />
                    <Text fontWeight={600} fontSize="20px" mb="10px">3. Geld erhalten</Text>
                    Wenn der Reiseveranstalter die Erstattung leistet, überweisen wir den Betrag umgehend auf Dein Konto. Unser Service ist für Dich ohne Risiko, denn LegalAI arbeitet rein erfolgsbasiert. Nur im Erfolgsfall berechnen wir ein Honorar in Höhe von 25% inkl. MwSt. Für unsere Kunden mit Rechtsschutzversicherung ist unser Service kostenlos, wir rechnen direkt mit der Versicherung ab..
                </Box>

                <Text fontWeight={600} fontSize="35px" textAlign="center" mt="60px" color="#013852">UNS VERTRAUEN</Text>
                <Flex gap="80px" justifyContent="center" wrap="wrap" mb="60px">
                    <Image w="120px" objectFit="contain" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/48e0a2c0-59fe-4231-aa18-1a2c7a7232a3/dafund_picture.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221113%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221113T182041Z&X-Amz-Expires=86400&X-Amz-Signature=876b4ea3819df350862f0a16938c54b7879843bb7cc62c85e44b969eab9d0b88&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22dafund%2520picture.png%22&x-id=GetObject" />
                    <Image w="120px" objectFit="contain" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d5507459-1210-43d8-a546-be178aa2f7a7/EF_logo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221113%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221113T195324Z&X-Amz-Expires=86400&X-Amz-Signature=c769bf5c6c334f23463079cd3571e28fff550989dd964757f2c824275441de65&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22EF%2520logo.png%22&x-id=GetObject" />
                    <Image w="120px" objectFit="contain" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a01a6372-3126-4c0e-a9bb-c3cdedb2eb4a/Female_Founders_Logo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221113%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221113T182057Z&X-Amz-Expires=86400&X-Amz-Signature=0656440c9bb08542bc82e2af41b68d17f3a78f1837b871d60c9f028663f2e1a1&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Female%2520Founders%2520Logo.png%22&x-id=GetObject" />
                    <Image w="120px" objectFit="contain" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4e348105-993b-4c98-bbf8-9727826008fd/Growf.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221113%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221113T182100Z&X-Amz-Expires=86400&X-Amz-Signature=1f88f7aee8395517ac945f9821ed418098af13ee055632af9208dd56d08f9d4c&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Growf.png%22&x-id=GetObject" />
                    <Image w="120px" objectFit="contain" src="https://thelegalai.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3595a5ed-2271-43a0-b5ed-b413144f875c%2FUntitled.png?table=block&id=c82af46a-76b7-4ccd-ad2a-5c8d8f816579&spaceId=f3346966-31ed-4391-8e7f-50fa40532ee9&width=2000&userId=&cache=v2" />
                </Flex>

                <Text fontWeight={600} fontSize="35px" textAlign="center" mt="60px" color="#013852">MISSION</Text>
                <Text w="80%" maxW="1000px" margin="auto" mt="10px" textAlign="center" color="#013852" fontWeight={500} mb="50px">
                    Der einfache Weg zur Gerechtigkeit
                </Text>
                <Flex w="100%" gap="100px">
                    <Image src={mission} w="40%" objectFit={"contain"} justifyContent="space-between" />
                    <Box>
                        <Text fontWeight={500}>Unsere Mission ist einfach: Wir verhelfen Menschen zu Ihrem Recht!</Text>
                        <Text mb="15px">
                        Das Problem ist allseits bekannt: Kompetente Rechtsberatung ist teuer und kompliziert. 
                        </Text>
                        
                        <Text mb="15px">
                        Viele Menschen verzichten aus Angst vor möglichen Kosten auf den Gang zum Anwalt. 
                        </Text>

                        <Text mb="15px">
                        Selbst wenn man sich für die Beauftragung eines Rechtsanwalts entscheidet, ist es für juristische Laien schwer möglich, die Kompetenz und den Qualitätsanspruch des Rechtsanwalts zu beurteilen. Gerade Ansprüche im Verbraucherrecht mit teilweise niedrigen Streitwerten werden oft stiefmütterlich behandelt. 
                        </Text>

                        <Text mb="15px">
                        Inzwischen gibt es für Verbraucherinnen und Verbraucher viele Möglichkeiten, sich durch Internet-Recherche über die Rechtslage zu informieren. Beiträge im Internet sind aber sehr abstrakt und können keine Rechtsberatung ersetzen.
                        </Text>

                        <Text mb="15px">
                        Gerade bei komplexen Rechtsfragen, die höchst individuell zu bewerten sind, müssen zur Ermittlung der angemessenen Anspruchshöhe eine Vielzahl von Faktoren berücksichtigt werden. 
                        </Text>

                        <Text mb="15px">
                        Frühere Gerichtsentscheidungen können allenfalls als Anhaltspunkt dienen, handelt es sich dabei stets um Einzelfälle, deren Bewertung nicht verallgemeinert werden kann.
                        </Text>

                        <Text mb="15px">
                        Für Menschen mit komplexen Rechtsproblemen, die eine einzelfallbezogene Betrachtung erfordern, besteht bisher nur die Möglichkeit, den Schritt zum Anwalt zu wagen. 
                        </Text>

                        <Text mb="15px">
                        Darum bieten wir mit unserer Software eine intuitive Lösung an, die allen hilft, sich einen Einblick in die Rechtslage zu schaffen und die größtmögliche Entschädigung zu erhalten. Mit einem einfachen Frage-Antwort-Spiel und eingebauter Datenprüfung sind die zur Fallbearbeitung erforderlichen Informationen vollständig, korrekt und schnell abgegeben.
                        </Text>

                        <Text mb="15px">
                        So hast du alles erledigt, um Deine Rechte durchzusetzen -  in durchschnittlich weniger als zehn Minuten. 
                        </Text>

                        <Text mb="15px">
                        Mit LegalAI kannst Du Dich jederzeit, schnell und papierlos von überall um Dein Rechtsproblem kümmern. Du machst nach dem Frage-Antwort-Prinzip Angaben zu deiner juristischen Situation und lässt deine mögliche Rückerstattung berechnen. Wenn du möchtest, kannst Du uns dann mit der Durchsetzung Deiner Rechte beauftragen. Danach kannst Du Dich zurück lehnen und musst Dich um nichts weiteres kümmern. Wir bemühen uns, Deinen Anspruch unkompliziert und schnell durchzusetzen.
                        </Text>
                    </Box>
                </Flex>

                <Text fontWeight={600} fontSize="35px" textAlign="center" mt="60px" color="#013852">UNSERE TECHNOLOGIE</Text>
                <Text w="80%" maxW="1000px" margin="auto" mt="10px" textAlign="center" color="#013852" fontWeight={500} mb="50px">
                    LegalAI prüft die Erfolgsaussichten Deines Rechtsstreits unter Anwendung von künstlicher Intelligenz.
                    <br />
                    Unsere Software greift auf eine Vielzahl von historischen Gerichtsentscheidungen zu und kann so das Bestehen und die Höhe eines Anspruchs im Einzelfall präzise ermitteln. 
                    <br />
                    Im Reiserecht müssen mitunter eine Vielzahl von Faktoren berücksichtigt werden, um die Rechtslage genau zu beurteilen. 
                    Für die präzise Bestimmung der Anspruchshöhe auf Reisepreisminderung müssen zum Beispiel neben der Prüfung der Voraussetzungen eines Reisemangels auch das Reiseziel, der Standard der gebuchten Unterkunft und die in den Reiseunterlagen zugesicherten Leistungen berücksichtigt werden. Für einen Rechtslaien ist es trotz öffentlich zugänglicher Gerichtsentscheidungen schwierig, in Eigenregie das Bestehen und die Höhe eines Anspruchs zu ermitteln. Jede Gerichtsentscheidung bewertet nur einen Einzelfall, ist doch die exakte Anspruchshöhe nicht schon durch den Gesetzgeber definiert.
                    <br />
                    Unser Algorithmus kann dabei unter Einbeziehung aller dieser Faktoren eine echte juristische Einschätzung geben zu den Erfolgsaussichten. Gerade durch unseren Zugriff auf eine Vielzahl von Daten können wir objektive, präzise und schnelle Ergebnisse für Dich erzielen. Wir stellen damit eine wirkliche Alternative zum Anwalt dar - nur kostengünstiger, bequemer und schneller.
                </Text>

                <Text fontWeight={600} fontSize="35px" textAlign="center" mt="60px" color="#013852">Unser Team</Text>
                <Flex my="30px" justifyContent="center" gap="70px">
                    <Flex direction="column" alignItems="center">
                        <Image src={tessia} borderRadius="50%" w="300px" />
                        <Text fontSize={"20px"} fontWeight={500} mt="10px">Tessia Tober</Text>
                    </Flex>
                    <Flex direction="column" alignItems="center">
                        <Image src={arpit} borderRadius="50%" w="300px" />
                        <Text fontSize={"20px"} fontWeight={500} mt="10px">Arpit Bajpai </Text>
                    </Flex>
                </Flex>
                <Text w="70%" textAlign="center" margin={"auto"}>
                    Tessia ist promovierte Volljuristin und Arpit Informatiker mit jahrelanger Erfahrung
                    in den Bereichen künstliche Intelligenz und Machine Learning. 
                    Wir wollen kompetente, schnelle und unkomplizierte Rechtsberatung für Jedermann ermöglichen, und zwar ohne jegliches Kostenrisiko!
                </Text>

                <Box my="60px">
                    <Text mb="20px" fontWeight={600} fontSize="35px" textAlign="center" mt="60px" color="#013852">Frequently Asked Questions</Text>
                    <Accordion allowToggle>
                        <AccordionItem>
                            {({ isExpanded }) => (
                            <>
                                <h2>
                                <AccordionButton>
                                    <Flex alignItems="center" gap="10px" flex='1' textAlign='left'>
                                        {isExpanded ? (
                                            <AiOutlineMinus fontSize='12px' />
                                            ) : (
                                            <AiOutlinePlus fontSize='12px' />
                                        )}
                                        Kann ich auch telefonisch beraten werden?
                                    </Flex>
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    Bei technischen Problem und/oder Fragen zu Deinem Fall kannst Du uns telefonisch erreichen unter 069/46094136.
                                    <br />
                                    Bitte hab Verständnis, dass wir anders als eine Rechtsanwaltskanzlei keine ausführliche Rechtsberatung vornehmen können.
                                </AccordionPanel>
                            </>
                            )}
                        </AccordionItem>
                        <AccordionItem>
                            {({ isExpanded }) => (
                            <>
                                <h2>
                                <AccordionButton>
                                    <Flex alignItems="center" gap="10px" flex='1' textAlign='left'>
                                        {isExpanded ? (
                                            <AiOutlineMinus fontSize='12px' />
                                            ) : (
                                            <AiOutlinePlus fontSize='12px' />
                                        )}
                                        Wie lange dauert die Fallbearbeitung?
                                    </Flex>
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    Wir bemühen uns, alsbald nach Erhalt der für die Fallbearbeitung erforderlichen Dokumente die Gegenseite zum Ausgleich des Geldbetrags aufzufordern. 
                                    <br />
                                    Leider hängt die Dauer der Fallbearbeitung auch von Faktoren ab, auf die wir keinen Einfluss haben, z.B. der Kooperationsbereitschaft der Gegenseite, gesetzlichen Fristen bzw. Dauer der Fallbearbeitung seitens der Gerichte.
                                </AccordionPanel>
                            </>
                            )}
                        </AccordionItem>
                        <AccordionItem>
                            {({ isExpanded }) => (
                            <>
                                <h2>
                                <AccordionButton>
                                    <Flex alignItems="center" gap="10px" flex='1' textAlign='left'>
                                        {isExpanded ? (
                                            <AiOutlineMinus fontSize='12px' />
                                            ) : (
                                            <AiOutlinePlus fontSize='12px' />
                                        )}
                                        Was passiert, sobald ich den Fragebogen abgeschickt habe?
                                    </Flex>
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    Wir kommen alsbald nach Erhalt der Informationen zu Deinem Fall per email auf Dich zu. Womöglich benötigen wir noch weitere Dokumente von Dir oder bitten Dich um ein kurzes Telefongespräch. 
                                    <br />
                                    Über den Status Quo Deines Falles halten wir Dich fortwährend per email auf dem Laufenden.
                                </AccordionPanel>
                            </>
                            )}
                        </AccordionItem>
                        <AccordionItem>
                            {({ isExpanded }) => (
                            <>
                                <h2>
                                <AccordionButton>
                                    <Flex alignItems="center" gap="10px" flex='1' textAlign='left'>
                                        {isExpanded ? (
                                            <AiOutlineMinus fontSize='12px' />
                                            ) : (
                                            <AiOutlinePlus fontSize='12px' />
                                        )}
                                        Wie unterscheidet sich LegalAI von einer Kanzlei?
                                    </Flex>
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    LegalAI ist im Schwerpunkt ein Technologieunternehmen. Unsere Software kann unter Einsatz von künstlicher Intelligenz in kürzester Zeit die Prüfung und Durchsetzung Deine Ansprüche vornehmen, die ein Rechtsanwalt manuell vornimmt. Mithilfe unsere Technologie kannst Du uns alle zur Fallbearbeitung erforderlichen Informationen bequem und einfach digital übermitteln und bist dabei nicht an die Servicezeiten eines Rechtsanwalts gebunden. Anders als bei der Beauftragung eines Rechtsanwalts bleibt unser Service für Dich kostenlos, sollte uns eine Durchsetzung Deines Anspruchs nicht gelingen. Bei einem Rechtsanwalt müssest Du im Falle des Unterliegens die Anwalts- bzw. Gerichtskosten selbst übernehmen.
                                </AccordionPanel>
                            </>
                            )}
                        </AccordionItem>
                        <AccordionItem>
                            {({ isExpanded }) => (
                            <>
                                <h2>
                                <AccordionButton>
                                    <Flex alignItems="center" gap="10px" flex='1' textAlign='left'>
                                        {isExpanded ? (
                                            <AiOutlineMinus fontSize='12px' />
                                            ) : (
                                            <AiOutlinePlus fontSize='12px' />
                                        )}
                                        Was ist, wenn der Fall nicht außergerichtlich gelöst werden kann?
                                    </Flex>
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    Sollte es LegalAI nicht gelingen, Deinen Fall außergerichtlich durchzusetzen, beauftragen wir mit Deinem Einverständnis unsere Partneranwälte, Dich vor Gericht zu vertreten. Wir kooperieren mit renommierten Reiserechtsanwälten. LegalAI übernimmt die Prozesskosten für Dich. 
                                </AccordionPanel>
                            </>
                            )}
                        </AccordionItem>
                        <AccordionItem>
                            {({ isExpanded }) => (
                            <>
                                <h2>
                                <AccordionButton>
                                    <Flex alignItems="center" gap="10px" flex='1' textAlign='left'>
                                        {isExpanded ? (
                                            <AiOutlineMinus fontSize='12px' />
                                            ) : (
                                            <AiOutlinePlus fontSize='12px' />
                                        )}
                                        Was bedeutet erfolgsbasiertes Arbeiten?
                                    </Flex>
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                Nach dem Du unseren Fragebogen ausgefüllt hast, erhältst Du eine kostenlose und unverbindliche Ersteinschätzung zu den Erfolgsaussichten Deines Falles. Du kannst uns nun damit beauftragen, Deine Rechte durchzusetzen. 
                                <br />
                                Wir versuchen nun, Deinen Anspruch außergerichtlich durchzusetzen und übernehmen jegliche Kosten für Dich. Sollte im Rahmen der Durchsetzung ein gerichtliches Verfahren erforderlich sein, so übernehmen wir das gesamte Prozesskostenrisiko für Dich. Sollte uns eine Durchsetzung Deiner Ansprüche gelingen, überweisen wir Dir die Erstattungssumme abzüglich der zuvor vereinbarten Erfolgsprovision auf Dein Konto.  Sollte LegalAI mit der Durchsetzung Deiner Ansprüche keinen Erfolg haben, bleibt unser Service für Dich kostenlos. 
                                <br />
                                Für unsere Kunden, die eine Rechtsschutzversicherung abgeschlossen haben, ist der Service ebenfalls kostenlos. Wir stellen eine Deckungsanfrage bei Deiner Rechtsschutzversicherung und rechnen direkt mit der Rechtsschutzversicherung ab. 
                                <br />
                                Weitere Informationen dazu findest Du in unseren AGBs.
                                </AccordionPanel>
                            </>
                            )}
                        </AccordionItem>
                    </Accordion>
                </Box>
            </Box>

        </Box>
    )
}

export default Home
