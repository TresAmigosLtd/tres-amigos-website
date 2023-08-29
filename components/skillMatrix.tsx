import React, { ForwardedRef, MutableRefObject, useRef, useState } from 'react'
import { amigoBio, Skill } from '@data/aboutUs'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { ChevronRightIcon } from '@heroicons/react/solid'

export type Category = 'Enablement' | 'Execution' | 'Leadership'
export const categoryGradients: { [key in Category]: string } = {
  Enablement: 'gradient-blue',
  Execution: 'gradient-pink',
  Leadership: 'gradient-orange',
}
export type AmigoText = { ben: string; jc: string; jacek: string }

function getBounds(chevronRef: React.MutableRefObject<HTMLElement>) {
  return chevronRef.current.getBoundingClientRect()
}

export const SkillMatrix = React.memo(
  ({
    data,
    order,
    onSelected,
  }: {
    data: Skill[]
    order: (keyof AmigoText)[]
    onSelected: (skills: Skill[]) => void
  }) => {
    const [selected, setSelected] = useState<Skill[]>([])
    const [active, setActive] = useState<boolean>(false)
    const chevronRef: MutableRefObject<HTMLElement> = useRef<HTMLElement>()
    const skillRefs = Array.from(data).map(data => ({
      data,
      ref: useRef<HTMLElement>(),
    }))
    useScrollPosition(({ prevPos, currPos }) => {
      if (!chevronRef.current || !skillRefs[0].ref.current) return
      const chevronBounds = getBounds(chevronRef)
      const chevronMiddle = chevronBounds.top + chevronBounds.height / 2
      const selected: Skill[] = []
      if (chevronMiddle < getBounds(skillRefs[0].ref).top) {
        onSelected([{ amigos: amigoBio }])
        setSelected([])
        setActive(false)
        return
      }
      for (const skill of skillRefs) {
        const skillBounds = getBounds(skill.ref)
        if (
          skillBounds.top < chevronMiddle &&
          skillBounds.bottom > chevronMiddle
        ) {
          const skillName = skill.ref.current.innerText
          selected.push(skill.data)
        }
      }
      if (selected.length) {
        setActive(true)
        setSelected(selected)
        onSelected(selected)
      }
    }, [])

    const SkillTag = React.forwardRef(
      (
        {
          data,
          onSelected,
          selected,
        }: {
          data: Skill
          onSelected: (skills: Skill[]) => void
          selected: Skill[]
        },
        ref: ForwardedRef<HTMLElement>,
      ) => {
        const active = selected.find(sk => sk?.skill?.name === data.skill.name)
          ? 'bg-clip-padding text-white'
          : ''
        const skilledAmigos = Object.keys(data.amigos)
        if (skilledAmigos.length == 0) return null
        const marks: React.ReactNode[] = []

        let size = 0
        let start = 0
        for (let i = 0; i < order.length; i++) {
          if (!data.amigos[order[i]]) {
            start = i + 1
            continue
          }
          size++
          let nextSkilledAmigoIsContiguous =
            order.length > i && data.amigos[order[i + 1]]
          if (nextSkilledAmigoIsContiguous) {
            continue
          }
          marks.push(
            <section
              ref={ref}
              key={data.skill.name + start}
              className={`md:col-start-${start + 1} md:col-end-${
                start + size + 1
              } p-1 rounded-full ${
                categoryGradients[data.skill.category]
              } animate-gradient shadow text-center transition-opacity opacity-80 hover:opacity-100`}
            >
              <div className='dark:bg-trueGray-900 bg-white h-full w-full rounded-full'>
                <div
                  onClick={() => {
                    onSelected([data])
                  }}
                  className={`flex justify-center align-middle text-base lg:text-xl p-1 sm:px-10 h-full rounded-full ${
                    categoryGradients[data.skill.category]
                  } cursor-pointer animate-gradient text-gradient transition-colors font-extrabold ${active}`}
                >
                  <span className='my-auto'>{data.skill.name}</span>
                </div>
              </div>
            </section>,
          )
          size = 0
        }
        return <>{marks.reverse()}</>
      },
    )

    return (
      <>
        <section
          ref={chevronRef}
          className={`h-10 w-10 sticky top-120 md:top-80 lg:top-96 -ml-8 animate-slide-${
            active ? 'in' : 'out'
          }`}
        >
          <ChevronRightIcon />
        </section>
        <div className='grid grid-cols-1 md:grid-cols-3 sm:gap-x-10 gap-x-3 gap-y-3 mt-2 relative'>
          {data.map((sk: Skill, idx) => {
            return (
              <SkillTag
                ref={skillRefs[idx].ref}
                key={sk.skill.name + idx}
                data={sk}
                selected={selected}
                onSelected={skill => {
                  setSelected([sk])
                  onSelected([sk])
                }}
              />
            )
          })}
        </div>
      </>
    )
  },
)
