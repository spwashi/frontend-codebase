import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Logo as LogoComp} from '../../components/logo/Logo';

export default {
    title:     'Demo/Layout/Components/Hero',
    component: LogoComp,
} as ComponentMeta<typeof LogoComp>;


const events =
          [
              {
                  title:       'Ricky Glore',
                  subtitle:    'Comedy Show',
                  src:         'https://secureservercdn.net/166.62.107.20/jbn.1aa.myftpupload.com/wp-content/uploads/2020/01/Ricky-Glore-838x1024.png',
                  description: 'This is a description',

                  startDate: '',
                  endDate:   '',
              },

          ]

const Template: ComponentStory<typeof LogoComp> =
          (args) =>
              <>
                  {
                      events.map(({title, subtitle, src}) => {
                          return (
                              <React.Fragment>
                                  <header>
                                      <div className="title">{title}</div>
                                      <div className="subtitle">{subtitle}</div>
                                  </header>
                                  <section>
                                      <img src={src} alt={title}/>
                                  </section>
                                  <footer>{}</footer>
                              </React.Fragment>
                          )
                      })
                  }
              </>;

export const HeroCarousel = Template.bind({});