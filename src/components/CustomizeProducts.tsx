"use client"
import { products } from "@wix/stores"
import { useEffect, useState } from "react"
import Add from "./Add"


interface props {
  variants: products.Variant[]
  productOptions: products.ProductOption[],
  productId: string
}

export default function CustomizeProducts({ variants, productId, productOptions }: props) {


  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string }>({});

  const handleOptionSelect = (optionType: string, choice: string) => {
    setSelectedOptions(prev => ({ ...prev, [optionType]: choice }))
  }

  const isVariantInStock = (choices: { [key: string]: string }) => {
    return variants.some(variant => {
      const variantChoices = variant.choices
      if (!variantChoices) return true;

      return Object.entries(choices).every(([key, value]) => variantChoices[key] === value) && variant.stock?.inStock && (variant.stock.quantity && variant.stock.quantity > 0)
    })
  }



  const [selectedVariant, setSelectedVariant] = useState<products.Variant>();

  useEffect(() => {

    const variant = variants.find(v => {
      const variantChoices = v.choices
      if (!variantChoices) return false;


      return selectedOptions['Color'] && selectedOptions['Size'] && Object.entries(selectedOptions).every(([key, value]) => variantChoices[key] === value);
    })

    console.log('variant', variant)
    setSelectedVariant(variant)
  }, [variants, selectedOptions]);



  return (
    <div className=" flex flex-col gap-6">
      {
        productOptions.map(option => (
          <div key={option.name}>
            <h4 className=" font-medium">Choose a {option.name}</h4>
            <br />
            <ul className=" flex items-center gap-3">
              {
                option.choices?.map(choice => {

                  const disabled = !isVariantInStock({ ...selectedOptions, [option.name!]: choice.description! })
                  const selected = selectedOptions[option.name!] === choice.description!

                  return (
                    option.name === 'Color' ? (
                      <li
                        key={choice.value}
                        onClick={() => !disabled && handleOptionSelect(option.name!, choice.description!)}
                        className=" w-8 aspect-square rounded-full  cursor-pointer relative"
                        style={{ background: choice.value, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? '0.4' : '1' }}>
                        {
                          selected &&
                          <div className=" absolute w-10 aspect-square rounded-full ring-2 ring-gray-400 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                        }
                        {
                          disabled &&
                          <div className=" absolute w-10 h-[2px] rounded-full bg-gray-300 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                        }
                      </li>
                    ) : (<li
                      key={choice.value}
                      onClick={() => !disabled && handleOptionSelect(option.name!, choice.description!)}
                      className=" ring-1 ring-sky-500 text-sky-500 py-2 px-5 cursor-pointer text-sm rounded-md font-medium"
                      style={{
                        backgroundColor: (selected || disabled) ? '#0095ff' : 'transparent',
                        opacity: disabled ? '0.4' : '1',
                        cursor: disabled ? 'not-allowed' : 'pointer',
                        color: (selected || disabled) ? 'white' : '#0095ff'
                      }}
                    >
                      {choice.description}
                    </li>
                    )
                  )
                })
              }
            </ul>
          </div>
        ))
      }
      <Add productId={productId} variantId={selectedVariant?._id || '00000000-0000-0000-0000-000000000000'} stockNumber={selectedVariant?.stock?.quantity || 0} />
    </div>
  )
}
