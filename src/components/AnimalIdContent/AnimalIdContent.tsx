"use client"

import MainTitle from "../MainTitle"
import useAnimalId from "./useAnimalId"

export default function AnimalIdContent({ id }: { id: string }) {

    const { animalData } = useAnimalId({ id })

    const base64String = `data:image/png;base64,${animalData.imageContent}`

    const base64StringPixelArt = `data:image/png;base64,${animalData.pixelArtContent}`

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div>
                    <div className="relative rounded-xl border border-brandingColor-800 overflow-hidden">
                        <img src={base64String} alt="Imagem do peixe" className="w-full h-auto" />
                        <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full bg-brandingColor-800">
                            <img src={base64StringPixelArt} alt="Imagem do peixe me pixel art" className="w-auto h-auto" />
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-10 items-center">
                    <MainTitle title={animalData.name} />
                    <div className="rounded-xl bg-brandingColor-1000 w-full h-auto">
                        <div className="flex flex-col gap-4 p-4">
                            <p className="text-yellow-500">Características</p>
                            {
                                typeof animalData.characteristics !== "string" ? (
                                    <>
                                        {
                                            animalData.characteristics.map((item) => {
                                                return <p>{item}</p>
                                            })
                                        }
                                    </>
                                ) : (
                                    <p>
                                        {animalData.characteristics}
                                    </p>
                                )
                            }
                        </div>
                        <div className="flex flex-col gap-4 p-4">
                            <p className="text-yellow-500">Descrição</p>
                                <p>{animalData.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} 