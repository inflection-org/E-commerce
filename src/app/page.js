'use client'
import { ProductCard } from '@/components/ui/cards/ProductCard'
// import ProductCard2 from '@/components/ui/cards/ProductCard2'
import ServiceCard from '@/components/ui/cards/ServiceCard'
import Slider from '@/components/ui/Slider'
import CotegorySlider from '@/components/ui/CotegorySlider'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import instance from './axios/Api'
import { getCookie, setCookie } from './axios/CookieConfig'
import { useRouter } from 'next/navigation'

const page = () => {
  const router = useRouter()
  const [allProduct, setAllProduct] = useState([])
  const [allTags, setAllTags] = useState([])
  const [filterTag, setFilterTag] = useState([])
  console.log(filterTag)

  const seeDetails = (product_id) => {
    router.push(`/shop/${product_id}`)
  }

  // ************tag-filter********
  const tagFilter = async (tag) => {
    try {
      const res = await instance.get(
        `/products/public?limit=4&sort=price_desc&tags=${tag}`
      )

      setFilterTag(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    const token = getCookie('access_token')
    if (token) {
      setCookie('access_token', token)
    }
    async function search() {
      try {
        const res = await instance.get(
          '/products/public?limit=4&sort=price_desc&tags=popular'
        )
        setAllProduct(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    // *****************
    async function searchTags() {
      try {
        const res = await instance.get('/tags')
        console.log(res.data)
        setAllTags(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    searchTags()
    search()
  }, [])

  return (
    <>
      <Slider />
      <div className='px-5 md:px-10'>
        {/* ***service card ******/}
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-8 mt-16 mb-5'>
          <ServiceCard title='Free Shipping' disc='On all orders over'>
            <svg
              width='61'
              height='60'
              viewBox='0 0 61 60'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g clipPath='url(#clip0_471_7745)'>
                <path
                  d='M20.6599 28.2218V19.9875C20.6599 19.4698 21.0796 19.05 21.5974 19.05H26.409C26.9267 19.05 27.3465 19.4698 27.3465 19.9875C27.3465 20.5052 26.9267 20.925 26.409 20.925H22.5349V23.1671H25.4115C25.9292 23.1671 26.349 23.5869 26.349 24.1046C26.349 24.6224 25.9292 25.0421 25.4115 25.0421H22.5349V27.2843H26.409C26.9267 27.2843 27.3465 27.704 27.3465 28.2218C27.3465 28.7395 26.9267 29.1593 26.409 29.1593H21.5974C21.0796 29.1593 20.6599 28.7396 20.6599 28.2218ZM29.1373 29.1593H33.9491C34.4668 29.1593 34.8866 28.7395 34.8866 28.2218C34.8866 27.704 34.4668 27.2843 33.9491 27.2843H30.0748V25.0421H32.9516C33.4693 25.0421 33.8891 24.6224 33.8891 24.1046C33.8891 23.5869 33.4693 23.1671 32.9516 23.1671H30.0748V20.925H33.9491C34.4668 20.925 34.8866 20.5052 34.8866 19.9875C34.8866 19.4698 34.4668 19.05 33.9491 19.05H29.1373C28.6196 19.05 28.1998 19.4698 28.1998 19.9875V28.2219C28.1998 28.7396 28.6195 29.1593 29.1373 29.1593ZM13.1199 28.2218V19.9875C13.1199 19.4698 13.5397 19.05 14.0574 19.05H17.8716C18.9385 19.05 19.8065 19.918 19.8065 20.9849V23.1071C19.8065 24.1003 19.0543 24.9211 18.0897 25.0298L19.6786 27.7488C19.9398 28.1959 19.7892 28.77 19.3421 29.0312C19.1934 29.118 19.0306 29.1594 18.87 29.1594C18.5477 29.1594 18.234 28.9931 18.0596 28.6948L15.9252 25.042H14.9949V28.2218C14.9949 28.7395 14.5752 29.1593 14.0574 29.1593C13.5397 29.1593 13.1199 28.7396 13.1199 28.2218ZM14.9949 23.167H17.8716C17.9025 23.167 17.9315 23.1378 17.9315 23.1071V20.9849C17.9315 20.954 17.9023 20.925 17.8716 20.925H14.9949V23.167ZM10.3317 25.0421C10.8494 25.0421 11.2692 24.6224 11.2692 24.1046C11.2692 23.5869 10.8494 23.1671 10.3317 23.1671H7.45508V20.925H11.3293C11.847 20.925 12.2668 20.5052 12.2668 19.9875C12.2668 19.4698 11.847 19.05 11.3293 19.05H6.51758C5.99984 19.05 5.58008 19.4698 5.58008 19.9875V28.2219C5.58008 28.7396 5.99984 29.1594 6.51758 29.1594C7.03531 29.1594 7.45508 28.7396 7.45508 28.2219V25.0423H10.3317V25.0421ZM60.5 29.7261V43.2687C60.5 44.7549 59.2909 45.964 57.8047 45.964H56.564C56.1021 49.5644 53.0199 52.3568 49.2958 52.3568C45.5717 52.3568 42.4896 49.5646 42.0276 45.964H22.8471C22.3851 49.5644 19.303 52.3568 15.5789 52.3568C11.8548 52.3568 8.77262 49.5646 8.31066 45.964H3.78125C1.97199 45.964 0.5 44.492 0.5 42.6828V10.9244C0.5 9.11518 1.97199 7.64319 3.78125 7.64319H36.6854C38.4947 7.64319 39.9666 9.11518 39.9666 10.9244V15.1645H51.9805C53.6021 15.1645 54.9807 16.0385 55.5782 17.4455L60.2271 28.3915C60.4133 28.8305 60.5 29.2544 60.5 29.7261ZM55.0338 20.9601H44.3369V27.5956H57.8519L55.0338 20.9601ZM3.78125 44.0891H8.31078C8.77285 40.4886 11.8549 37.6964 15.579 37.6964C19.3031 37.6964 22.3851 40.4886 22.8472 44.0891H38.0915V10.9244C38.0915 10.149 37.4607 9.51819 36.6853 9.51819H3.78125C3.00582 9.51819 2.375 10.149 2.375 10.9244V42.683C2.375 43.4583 3.00582 44.0891 3.78125 44.0891ZM21.0342 45.0266C21.0342 42.0186 18.587 39.5714 15.579 39.5714C12.571 39.5714 10.1238 42.0186 10.1238 45.0266C10.1238 48.0347 12.571 50.4819 15.579 50.4819C18.587 50.4819 21.0342 48.0347 21.0342 45.0266ZM54.751 45.0266C54.751 42.0186 52.3038 39.5714 49.2958 39.5714C46.2878 39.5714 43.8406 42.0186 43.8406 45.0266C43.8406 48.0347 46.2878 50.4819 49.2958 50.4819C52.3038 50.4818 54.751 48.0347 54.751 45.0266ZM58.625 43.2688V37.4351H57.1827C56.6649 37.4351 56.2452 37.0153 56.2452 36.4976C56.2452 35.9798 56.6649 35.5601 57.1827 35.5601H58.625V29.7262C58.625 29.6348 58.617 29.552 58.6036 29.4708H43.3994C42.8817 29.4708 42.4619 29.051 42.4619 28.5333V20.0226C42.4619 19.5049 42.8817 19.0851 43.3994 19.0851H54.2375L53.8524 18.1785C53.5541 17.4759 52.8368 17.0395 51.9805 17.0395H39.9665V44.0891H42.0276C42.4897 40.4886 45.5717 37.6964 49.2958 37.6964C53.0199 37.6964 56.102 40.4886 56.5639 44.0891H57.8047C58.257 44.0891 58.625 43.721 58.625 43.2688ZM52.7421 45.0266C52.7421 46.9269 51.1961 48.4728 49.2958 48.4728C47.3956 48.4728 45.8497 46.9269 45.8497 45.0266C45.8497 43.1264 47.3956 41.5805 49.2958 41.5805C51.196 41.5803 52.7421 43.1264 52.7421 45.0266ZM50.8671 45.0266C50.8671 44.1602 50.1622 43.4555 49.2958 43.4555C48.4295 43.4555 47.7247 44.1603 47.7247 45.0266C47.7247 45.8931 48.4296 46.5978 49.2958 46.5978C50.1622 46.5978 50.8671 45.893 50.8671 45.0266ZM19.0252 45.0266C19.0252 46.9269 17.4793 48.4728 15.579 48.4728C13.6788 48.4728 12.1329 46.9269 12.1329 45.0266C12.1329 43.1264 13.6788 41.5805 15.579 41.5805C17.4792 41.5803 19.0252 43.1264 19.0252 45.0266ZM17.1502 45.0266C17.1502 44.1602 16.4454 43.4555 15.579 43.4555C14.7126 43.4555 14.0079 44.1603 14.0079 45.0266C14.0079 45.8931 14.7127 46.5978 15.579 46.5978C16.4454 46.5978 17.1502 45.893 17.1502 45.0266Z'
                  fill='#FF6650'
                ></path>
              </g>
              <defs>
                <clipPath id='clip0_471_7745'>
                  <rect
                    width='60'
                    height='60'
                    fill='white'
                    transform='translate(0.5)'
                  ></rect>
                </clipPath>
              </defs>
            </svg>
          </ServiceCard>
          <ServiceCard title='Free Returns' disc='Returns within 7 days'>
            <svg
              width='60'
              height='60'
              viewBox='0 0 60 60'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M30.0066 45.956C29.8836 45.9557 29.7621 45.9287 29.6505 45.8769L14.5714 38.6241C14.4337 38.5558 14.3176 38.4506 14.2361 38.3202C14.1546 38.1898 14.1109 38.0394 14.1099 37.8857V21.6527C14.1094 21.514 14.1443 21.3775 14.2112 21.2561C14.278 21.1346 14.3747 21.0321 14.492 20.9582C14.6094 20.8844 14.7436 20.8416 14.8821 20.8339C15.0205 20.8262 15.1587 20.8539 15.2835 20.9142L30.3626 28.167C30.5003 28.2353 30.6164 28.3405 30.6979 28.4709C30.7794 28.6013 30.8231 28.7517 30.8242 28.9054V45.1384C30.8242 45.2767 30.7891 45.4128 30.7222 45.5339C30.6553 45.655 30.5588 45.7571 30.4417 45.8307C30.3118 45.9136 30.1607 45.9571 30.0066 45.956ZM15.745 37.3846L29.189 43.8593V29.4263L15.745 22.9516V37.3846Z'
                fill='#FF6650'
              ></path>
              <path
                d='M30.0065 29.7165C29.8925 29.7246 29.7779 29.7089 29.6703 29.6704L14.5912 22.4176C14.4511 22.3524 14.3327 22.2486 14.2497 22.1184C14.1667 21.9881 14.1226 21.8369 14.1226 21.6825C14.1226 21.528 14.1667 21.3768 14.2497 21.2466C14.3327 21.1163 14.4511 21.0125 14.5912 20.9473L29.6703 13.6616C29.7805 13.6094 29.901 13.5823 30.023 13.5823C30.145 13.5823 30.2655 13.6094 30.3758 13.6616L45.4549 20.9143C45.5936 20.9814 45.7105 21.0863 45.7922 21.217C45.8738 21.3476 45.9169 21.4987 45.9164 21.6528C45.9164 21.8059 45.8731 21.9559 45.7914 22.0854C45.7097 22.2149 45.5931 22.3187 45.4549 22.3847L30.3296 29.6704C30.2261 29.7073 30.1162 29.723 30.0065 29.7165ZM16.8197 21.6462L30.0065 27.9956L43.1934 21.6594L30.0065 15.3033L16.8197 21.6462Z'
                fill='#FF6650'
              ></path>
              <path
                d='M30.0065 45.956C29.8524 45.9571 29.7013 45.9136 29.5714 45.8307C29.4543 45.7571 29.3578 45.655 29.2909 45.5339C29.224 45.4128 29.1889 45.2767 29.189 45.1384V28.912C29.1885 28.758 29.2316 28.6069 29.3132 28.4762C29.3949 28.3456 29.5118 28.2407 29.6505 28.1736L44.7296 20.9208C44.8545 20.8604 44.9926 20.8328 45.131 20.8405C45.2695 20.8482 45.4037 20.891 45.5211 20.9648C45.6385 21.0387 45.7351 21.1412 45.802 21.2626C45.8688 21.3841 45.9037 21.5206 45.9033 21.6593V37.8791C45.9037 38.0331 45.8606 38.1842 45.779 38.3149C45.6973 38.4455 45.5804 38.5504 45.4417 38.6175L30.3296 45.8769C30.2285 45.9251 30.1185 45.952 30.0065 45.956ZM30.8241 29.4263V43.8395L44.2681 37.3648V22.9516L30.8241 29.4263Z'
                fill='#FF6650'
              ></path>
              <path
                d='M22.4636 26.0901C22.28 26.0882 22.1024 26.0246 21.9594 25.9095C21.8163 25.7945 21.7162 25.6346 21.6751 25.4557C21.6339 25.2767 21.6543 25.0892 21.7327 24.9232C21.8112 24.7572 21.9432 24.6225 22.1075 24.5407L37.1932 17.2879C37.3883 17.1949 37.6123 17.183 37.8161 17.2546C38.02 17.3263 38.1872 17.4757 38.2812 17.6703C38.3281 17.7668 38.3554 17.8715 38.3616 17.9786C38.3677 18.0857 38.3526 18.1929 38.317 18.2941C38.2814 18.3953 38.2262 18.4884 38.1544 18.5681C38.0826 18.6477 37.9957 18.7124 37.8987 18.7582L22.8196 26.011C22.7079 26.0622 22.5865 26.0892 22.4636 26.0901Z'
                fill='#FF6650'
              ></path>
              <path
                d='M24.488 33.211C24.3649 33.2116 24.2433 33.1846 24.132 33.1319L19.6814 30.9891C19.5845 30.9432 19.4976 30.8786 19.4258 30.7989C19.354 30.7192 19.2987 30.6261 19.2632 30.5249C19.2276 30.4237 19.2125 30.3165 19.2186 30.2094C19.2248 30.1024 19.2521 29.9976 19.299 29.9012C19.393 29.7066 19.5602 29.5571 19.7641 29.4855C19.9679 29.4138 20.1919 29.4258 20.3869 29.5187L24.8375 31.6484C25.0014 31.7299 25.1332 31.8641 25.2118 32.0295C25.2903 32.1948 25.3111 32.3817 25.2709 32.5603C25.2306 32.7389 25.1316 32.8987 24.9896 33.0143C24.8477 33.1299 24.6711 33.1946 24.488 33.1979V33.211Z'
                fill='#FF6650'
              ></path>
              <path
                d='M5.23493 40.7011C5.07536 40.7036 4.91853 40.6594 4.7838 40.5738C4.64906 40.4883 4.5423 40.3652 4.47668 40.2197C2.00191 34.0996 1.81012 27.2936 3.93632 21.0437C6.06252 14.7939 10.365 9.51685 16.0585 6.17554C21.7521 2.83423 28.4573 1.6514 34.9505 2.84291C41.4437 4.03441 47.292 7.5208 51.4283 12.6659C51.505 12.7478 51.5641 12.8446 51.6017 12.9503C51.6394 13.056 51.6549 13.1683 51.6473 13.2803C51.6397 13.3922 51.6091 13.5014 51.5575 13.601C51.5058 13.7007 51.4343 13.7886 51.3472 13.8593C51.2601 13.9301 51.1594 13.9822 51.0513 14.0123C50.9432 14.0425 50.8301 14.05 50.7189 14.0346C50.6078 14.0191 50.501 13.9809 50.4053 13.9224C50.3095 13.8639 50.2269 13.7863 50.1624 13.6945C46.2714 8.86958 40.7778 5.60149 34.6809 4.48459C28.584 3.36769 22.2888 4.47617 16.9401 7.60842C11.5913 10.7407 7.54451 15.6886 5.53556 21.5524C3.52661 27.4162 3.68899 33.8062 5.99317 39.5604C6.04269 39.6844 6.0611 39.8186 6.0468 39.9513C6.0325 40.084 5.98591 40.2112 5.91111 40.3218C5.83632 40.4324 5.73558 40.5229 5.61771 40.5856C5.49984 40.6483 5.36842 40.6811 5.23493 40.6813V40.7011Z'
                fill='#FF6650'
              ></path>
              <path
                d='M30.0395 57.422C25.9227 57.4317 21.8564 56.5167 18.1406 54.7444C14.4248 52.9721 11.1546 50.3879 8.57139 47.1824C8.43499 47.0075 8.37365 46.7857 8.40085 46.5656C8.42805 46.3455 8.54157 46.1452 8.71644 46.0088C8.89131 45.8724 9.1132 45.811 9.3333 45.8382C9.55339 45.8655 9.75367 45.979 9.89007 46.1538C13.8049 50.973 19.3218 54.2242 25.4343 55.314C31.5468 56.4039 37.8474 55.2598 43.1865 52.0905C48.5257 48.9213 52.5474 43.9381 54.518 38.0502C56.4886 32.1623 56.2766 25.7622 53.9208 20.0176C53.8765 19.9179 53.8527 19.8104 53.8506 19.7013C53.8485 19.5923 53.8682 19.4839 53.9087 19.3826C53.9491 19.2813 54.0094 19.1891 54.086 19.1114C54.1626 19.0338 54.254 18.9722 54.3547 18.9304C54.4555 18.8886 54.5636 18.8674 54.6726 18.8681C54.7817 18.8687 54.8896 18.8911 54.9898 18.934C55.0901 18.977 55.1808 19.0396 55.2565 19.1181C55.3322 19.1966 55.3914 19.2894 55.4307 19.3912C57.6771 24.8892 58.0963 30.9637 56.6265 36.7182C55.1568 42.4726 51.8758 47.6021 47.2681 51.3494C42.3899 55.2865 36.3083 57.4301 30.0395 57.422Z'
                fill='#FF6650'
              ></path>
              <path
                d='M50.8616 14.0572H50.7692L43.1539 13.233C42.9494 13.197 42.7662 13.0845 42.6416 12.9184C42.517 12.7523 42.4603 12.545 42.4829 12.3386C42.5056 12.1322 42.6059 11.9421 42.7636 11.807C42.9213 11.6719 43.1244 11.6018 43.3319 11.611L50.1099 12.3429L50.8681 5.53851C50.8731 5.42679 50.9009 5.31727 50.9499 5.21673C50.9989 5.11619 51.068 5.02676 51.1529 4.95399C51.2378 4.88121 51.3368 4.82663 51.4436 4.79363C51.5505 4.76062 51.663 4.74988 51.7741 4.76208C51.8853 4.77428 51.9928 4.80916 52.0899 4.86456C52.1871 4.91996 52.2718 4.9947 52.3389 5.08416C52.4061 5.17362 52.4541 5.2759 52.4801 5.38467C52.5061 5.49344 52.5095 5.60639 52.4901 5.71653L51.6725 13.3319C51.648 13.5473 51.5389 13.7442 51.3693 13.8792C51.2257 13.9955 51.0463 14.0584 50.8616 14.0572Z'
                fill='#FF6650'
              ></path>
              <path
                d='M8.34045 55.0351H8.24815C8.03328 55.0119 7.83637 54.9045 7.70046 54.7365C7.56455 54.5684 7.5007 54.3534 7.52287 54.1384L8.34705 46.5231C8.3573 46.4166 8.38885 46.3133 8.43982 46.2193C8.49079 46.1253 8.56014 46.0425 8.64375 45.9758C8.81256 45.8399 9.02812 45.7759 9.24375 45.7978L16.8591 46.6154C17.0627 46.6517 17.2449 46.7638 17.3691 46.9291C17.4933 47.0943 17.5503 47.3006 17.5286 47.5062C17.5068 47.7118 17.408 47.9015 17.252 48.0372C17.096 48.1729 16.8943 48.2444 16.6877 48.2373L9.8899 47.5055L9.14485 54.3099C9.12372 54.5086 9.02993 54.6926 8.88147 54.8265C8.73301 54.9603 8.54035 55.0346 8.34045 55.0351Z'
                fill='#FF6650'
              ></path>
            </svg>
          </ServiceCard>
          <ServiceCard title='Support 24/7' disc='Contact us 24 hours a day'>
            <svg
              width='60'
              height='60'
              viewBox='0 0 60 60'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M55.0799 30.7888C55.2909 30.9997 55.5769 31.1182 55.8752 31.1182C56.1735 31.1182 56.4595 30.9997 56.6704 30.7888C56.8813 30.578 56.9998 30.292 56.9998 29.9938C57.0017 24.0363 55.0316 18.2457 51.3969 13.5249C47.7621 8.80405 42.667 5.41846 36.9061 3.89603C31.1452 2.3736 25.0423 2.79992 19.5491 5.10851C14.0559 7.4171 9.48125 11.4782 6.53846 16.6585C6.46232 16.7869 6.41254 16.9293 6.39202 17.0772C6.3715 17.2251 6.38065 17.3756 6.41894 17.5199C6.45723 17.6642 6.52389 17.7995 6.61503 17.9178C6.70617 18.0361 6.81997 18.135 6.94978 18.2089C7.07958 18.2827 7.2228 18.33 7.37108 18.3479C7.51935 18.3658 7.66971 18.354 7.81337 18.3132C7.95704 18.2724 8.09114 18.2034 8.20784 18.1102C8.32454 18.017 8.4215 17.9015 8.49308 17.7705C11.1903 13.0213 15.3838 9.29811 20.4193 7.18147C25.4549 5.06483 31.0496 4.67378 36.3308 6.06931C41.612 7.46484 46.2828 10.5685 49.6148 14.8962C52.9467 19.2239 54.7525 24.5324 54.7506 29.9938C54.7506 30.292 54.869 30.578 55.0799 30.7888ZM42.3802 29.9938H43.5042C43.8025 29.9938 44.0885 29.8753 44.2994 29.6645C44.5104 29.4536 44.6288 29.1676 44.6288 28.8694C44.6288 28.5712 44.5104 28.2852 44.2994 28.0743C44.0885 27.8635 43.8025 27.745 43.5042 27.745H42.3802V18.7498C42.3802 18.4516 42.2617 18.1656 42.0507 17.9548C41.9449 17.849 41.8202 17.7666 41.6846 17.7106C41.6374 17.6911 41.5889 17.6748 41.5394 17.6619C41.5176 17.6562 41.4957 17.6511 41.4735 17.6468C41.3286 17.6181 41.1795 17.6182 41.0346 17.6471C40.8898 17.676 40.7521 17.7332 40.6293 17.8153C40.5066 17.8975 40.4012 18.003 40.3192 18.1258L33.5714 28.2454C33.4584 28.4147 33.3935 28.6115 33.3836 28.8149C33.3737 29.0182 33.4193 29.2204 33.5153 29.3999C33.6114 29.5793 33.7544 29.7294 33.929 29.834C34.1037 29.9386 34.3035 29.9938 34.5071 29.9938H40.1302V34.4914C40.1302 34.7896 40.2487 35.0756 40.4597 35.2864C40.6707 35.4973 40.9568 35.6158 41.2552 35.6158C41.5536 35.6158 41.8397 35.4973 42.0507 35.2864C42.2617 35.0756 42.3802 34.7896 42.3802 34.4914V29.9938ZM40.1302 27.745V22.4635L36.6079 27.745H40.1302ZM22.6362 35.4262C22.8211 35.5497 23.0385 35.6157 23.2609 35.6158H32.258C32.5562 35.6158 32.8423 35.4973 33.0532 35.2864C33.2641 35.0756 33.3826 34.7896 33.3826 34.4914C33.3826 34.1932 33.2641 33.9072 33.0532 33.6963C32.8423 33.4854 32.5562 33.367 32.258 33.367H25.9746C30.4732 28.812 33.3826 25.3433 33.3826 23.2474C33.3826 21.7564 32.7902 20.3264 31.7356 19.2721C30.6811 18.2177 29.2508 17.6254 27.7594 17.6254C26.268 17.6254 24.8378 18.2177 23.7832 19.2721C22.7287 20.3264 22.1362 21.7564 22.1362 23.2474C22.1362 23.5456 22.2547 23.8316 22.4656 24.0425C22.6765 24.2533 22.9626 24.3718 23.2609 24.3718C23.5591 24.3718 23.8452 24.2533 24.0561 24.0425C24.267 23.8316 24.3855 23.5456 24.3855 23.2474C24.3855 22.3528 24.741 21.4948 25.3737 20.8622C26.0064 20.2296 26.8646 19.8742 27.7594 19.8742C28.6542 19.8742 29.5124 20.2296 30.1451 20.8622C30.7779 21.4948 31.1333 22.3528 31.1333 23.2474C31.1333 24.4674 28.4016 27.799 23.0146 33.15L22.4657 33.6964C22.3085 33.8537 22.2014 34.054 22.1581 34.2721C22.1147 34.4901 22.137 34.7162 22.2221 34.9216C22.3072 35.127 22.4513 35.3026 22.6362 35.4262ZM26.8023 56.4823C28.5911 56.8871 30.4255 57.0542 32.258 56.9793C34.1452 57.0776 36.0342 56.8252 37.8294 56.235C38.4997 56.0102 39.0825 55.5806 39.4953 55.0068C39.9082 54.433 40.1304 53.744 40.1304 53.0372V46.8598C40.1304 45.9651 39.775 45.1072 39.1422 44.4746C38.5095 43.842 37.6513 43.4866 36.7565 43.4866H28.8841C27.9892 43.4866 27.1311 43.842 26.4983 44.4746C25.8656 45.1072 25.5101 45.9651 25.5101 46.8598V47.5502C20.0339 45.3638 15.5802 41.1985 13.0334 35.8812C12.9044 35.6156 12.6761 35.4114 12.3978 35.3127C12.1195 35.214 11.8136 35.2287 11.546 35.3536C11.2784 35.4785 11.0707 35.7036 10.9678 35.9803C10.8648 36.257 10.8748 36.563 10.9956 36.8324C12.4828 40.001 14.6139 42.825 17.2531 45.1247C19.8923 47.4243 22.9817 49.1491 26.3244 50.1891C26.4918 50.2372 26.6681 50.2457 26.8394 50.214C27.0106 50.1823 27.1722 50.1113 27.3114 50.0065C27.4505 49.9018 27.5634 49.7661 27.6411 49.6103C27.7189 49.4545 27.7594 49.2827 27.7594 49.1086V46.8598C27.7594 46.5616 27.8779 46.2756 28.0888 46.0647C28.2997 45.8538 28.5858 45.7354 28.8841 45.7354H36.7565C37.0548 45.7354 37.3408 45.8538 37.5518 46.0647C37.7627 46.2756 37.8812 46.5616 37.8812 46.8598V53.0372C37.8811 53.273 37.8068 53.5027 37.669 53.694C37.5312 53.8853 37.3367 54.0284 37.113 54.1031C35.5495 54.62 33.9015 54.833 32.258 54.7305C30.5816 54.8056 28.9028 54.6543 27.2668 54.2808L26.6055 54.1436C15.1612 51.8206 8.17947 44.8415 5.85372 33.3985L5.71651 32.7362C5.34357 31.1002 5.19227 29.4214 5.26666 27.7451C5.241 26.1567 5.40753 24.571 5.76263 23.0226C5.81448 22.7686 5.95251 22.5404 6.15335 22.3765C6.35419 22.2125 6.60551 22.123 6.86477 22.1231H13.1391C13.4374 22.1231 13.7235 22.2415 13.9344 22.4524C14.1453 22.6633 14.2638 22.9493 14.2638 23.2475V31.1182C14.2638 31.4165 14.1453 31.7024 13.9344 31.9133C13.7235 32.1242 13.4374 32.2426 13.1391 32.2426H10.8898C10.5916 32.2426 10.3055 32.3611 10.0946 32.572C9.8837 32.7828 9.76521 33.0688 9.76521 33.367C9.76521 33.6652 9.8837 33.9512 10.0946 34.1621C10.3055 34.373 10.5916 34.4914 10.8898 34.4914H13.1391C14.0339 34.4914 14.8921 34.136 15.5248 33.5034C16.1576 32.8708 16.513 32.0129 16.513 31.1182V23.2475C16.513 22.3529 16.1576 21.4949 15.5248 20.8623C14.8921 20.2297 14.0339 19.8743 13.1391 19.8743H6.86477C6.09069 19.877 5.34086 20.1446 4.73995 20.6324C4.13904 21.1203 3.72325 21.7991 3.56171 22.556C3.17393 24.2578 2.99119 25.9999 3.01738 27.7451C2.94252 29.5768 3.10966 31.4104 3.51447 33.1984L3.64943 33.846C6.16637 46.2571 13.7431 53.831 26.1557 56.3474L26.8023 56.4823ZM42.7912 53.6062C42.5425 53.6075 42.3004 53.5263 42.1028 53.3755C41.9052 53.2246 41.7631 53.0125 41.6989 52.7724C41.6346 52.5322 41.6518 52.2775 41.7476 52.0482C41.8435 51.8188 42.0128 51.6277 42.2288 51.5047C45.5483 49.6085 48.3856 46.9726 50.5203 43.8017C52.655 40.6308 54.0294 37.0104 54.5369 33.222C54.5536 33.0737 54.5997 32.9302 54.6725 32.7999C54.7453 32.6696 54.8434 32.5551 54.9609 32.463C55.0784 32.371 55.2131 32.3033 55.3571 32.2638C55.5011 32.2243 55.6515 32.2139 55.7995 32.2332C55.9475 32.2524 56.0903 32.301 56.2194 32.376C56.3485 32.4509 56.4613 32.5509 56.5514 32.6699C56.6414 32.789 56.7069 32.9247 56.7439 33.0693C56.7809 33.2139 56.7888 33.3644 56.767 33.5121C56.2144 37.6448 54.7161 41.5944 52.3885 45.054C50.061 48.5137 46.9669 51.3902 43.3467 53.46C43.1773 53.556 42.9859 53.6064 42.7912 53.6062Z'
                fill='#FF6650'
              ></path>
            </svg>
          </ServiceCard>
          <ServiceCard
            title='100% Payment Secure'
            disc='Your payment is safe with us'
          >
            <svg
              width='60'
              height='60'
              viewBox='0 0 60 60'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M20.625 17.8125V12.0769C20.625 11.5594 21.045 11.1394 21.5625 11.1394C24.3994 11.1394 27.1181 10.0088 29.1169 7.99594C29.2537 7.85813 29.3353 7.77656 29.3353 7.77656C29.5106 7.59937 29.7506 7.5 30 7.5C30.2494 7.5 30.4894 7.59937 30.6647 7.77656C30.6647 7.77656 30.7463 7.85813 30.8831 7.99594C32.8819 10.0088 35.6006 11.1394 38.4375 11.1394C38.955 11.1394 39.375 11.5594 39.375 12.0769V17.8125H49.6875C50.205 17.8125 50.625 18.2325 50.625 18.75C50.625 19.2675 50.205 19.6875 49.6875 19.6875H39.3722C39.3403 21.0019 39.0591 22.2703 38.5678 23.4375H54.375V20.625C54.375 20.3766 54.2766 20.1375 54.1003 19.9622C53.925 19.7859 53.6859 19.6875 53.4375 19.6875C52.92 19.6875 52.5 19.2675 52.5 18.75C52.5 18.2325 52.92 17.8125 53.4375 17.8125C54.1838 17.8125 54.8991 18.1087 55.4259 18.6366C55.9537 19.1634 56.25 19.8787 56.25 20.625V38.4375C56.25 39.1838 55.9537 39.8991 55.4259 40.4259C54.8991 40.9538 54.1838 41.25 53.4375 41.25H45V48.75C45 49.4963 44.7037 50.2116 44.1759 50.7384C43.6491 51.2663 42.9338 51.5625 42.1875 51.5625H6.5625C5.81625 51.5625 5.10094 51.2663 4.57406 50.7384C4.04625 50.2116 3.75 49.4963 3.75 48.75V43.5938C3.75 43.0762 4.17 42.6562 4.6875 42.6562C5.205 42.6562 5.625 43.0762 5.625 43.5938V48.75C5.625 48.9984 5.72344 49.2375 5.89969 49.4128C6.075 49.5891 6.31406 49.6875 6.5625 49.6875H42.1875C42.4359 49.6875 42.675 49.5891 42.8503 49.4128C43.0266 49.2375 43.125 48.9984 43.125 48.75V41.25H17.8125C17.0662 41.25 16.3509 40.9538 15.8241 40.4259C15.2962 39.8991 15 39.1838 15 38.4375V35.625H5.625V39.375C5.625 39.8925 5.205 40.3125 4.6875 40.3125C4.17 40.3125 3.75 39.8925 3.75 39.375V30.9375C3.75 30.1912 4.04625 29.4759 4.57406 28.9491C5.10094 28.4212 5.81625 28.125 6.5625 28.125H15V20.625C15 19.8787 15.2962 19.1634 15.8241 18.6366C16.3509 18.1087 17.0662 17.8125 17.8125 17.8125H20.625ZM37.5 43.125C36.465 43.125 35.625 43.965 35.625 45C35.625 46.035 36.465 46.875 37.5 46.875C38.535 46.875 39.375 46.035 39.375 45C39.375 43.965 38.535 43.125 37.5 43.125ZM31.875 43.125C30.84 43.125 30 43.965 30 45C30 46.035 30.84 46.875 31.875 46.875C32.91 46.875 33.75 46.035 33.75 45C33.75 43.965 32.91 43.125 31.875 43.125ZM16.875 25.3125V38.4375C16.875 38.6859 16.9734 38.925 17.1497 39.1003C17.325 39.2766 17.5641 39.375 17.8125 39.375H53.4375C53.6859 39.375 53.925 39.2766 54.1003 39.1003C54.2766 38.925 54.375 38.6859 54.375 38.4375V25.3125H37.5375C36.3413 27.0375 34.6209 28.3978 32.5509 29.1413C31.2778 29.5997 30.3169 29.9447 30.3169 29.9447C30.1125 30.0187 29.8875 30.0187 29.6831 29.9447C29.6831 29.9447 28.7222 29.5997 27.4491 29.1413C25.3791 28.3978 23.6587 27.0375 22.4625 25.3125H16.875ZM27.1875 37.5H32.8125C33.33 37.5 33.75 37.08 33.75 36.5625C33.75 36.045 33.33 35.625 32.8125 35.625H27.1875C26.67 35.625 26.25 36.045 26.25 36.5625C26.25 37.08 26.67 37.5 27.1875 37.5ZM15 30H6.5625C6.31406 30 6.075 30.0984 5.89969 30.2747C5.72344 30.45 5.625 30.6891 5.625 30.9375V33.75H15V30ZM21.5625 33.75H27.1875C27.705 33.75 28.125 33.33 28.125 32.8125C28.125 32.295 27.705 31.875 27.1875 31.875H21.5625C21.045 31.875 20.625 32.295 20.625 32.8125C20.625 33.33 21.045 33.75 21.5625 33.75ZM37.5 19.4372V12.9797C34.7119 12.7706 32.07 11.6334 30 9.74625C27.93 11.6334 25.2881 12.7706 22.5 12.9797V19.4372C22.5 22.9969 24.7341 26.1731 28.0828 27.3769L30 28.0659L31.9172 27.3769C35.2659 26.1731 37.5 22.9969 37.5 19.4372ZM35.3906 15.1106C35.3906 14.5922 34.9706 14.1731 34.4531 14.1731C33.0825 14.1731 31.7709 13.6144 30.8212 12.6263C30.7303 12.5316 30.6759 12.4753 30.6759 12.4753C30.4988 12.2916 30.255 12.1875 30 12.1875C29.745 12.1875 29.5012 12.2916 29.3241 12.4753C29.3241 12.4753 29.2697 12.5316 29.1788 12.6263C28.2291 13.6144 26.9175 14.1731 25.5469 14.1731C25.0294 14.1731 24.6094 14.5922 24.6094 15.1106V17.97C24.6094 21.2175 26.6287 24.1228 29.6737 25.2534C29.8838 25.3322 30.1162 25.3322 30.3263 25.2534C33.3713 24.1228 35.3906 21.2175 35.3906 17.97V15.1106ZM20.6278 19.6875H17.8125C17.5641 19.6875 17.325 19.7859 17.1497 19.9622C16.9734 20.1375 16.875 20.3766 16.875 20.625V23.4375H21.4322C20.94 22.2703 20.6597 21.0019 20.6278 19.6875ZM30 14.4225C28.9988 15.2653 27.7791 15.8072 26.4844 15.9834V17.97C26.4844 20.3156 27.8738 22.4259 30 23.3634C32.1262 22.4259 33.5156 20.3156 33.5156 17.97V15.9834C32.2209 15.8072 31.0012 15.2663 30 14.4225Z'
                fill='#FF6650'
              ></path>
            </svg>
          </ServiceCard>
        </div>
        {/* ******ProductCard1*** */}
        <div className='py-10'>
          <div className='block md:flex justify-between'>
            <h1 className='text-3xl capitalize md:text-4xl font-bold'>
              Suggested for you
            </h1>
            <div className='mt-5 hidden md:block'>
              <Link
                href='/shop'
                className='bg-orange  md:mt-0 hover:bg-black duration-1000 text-white rounded-full px-5 py-3'
              >
                View All Deals
              </Link>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-10 md:gap-12'>
            {allProduct.length > 0 &&
              allProduct?.map((product, index) => (
                <ProductCard
                  toto={() => seeDetails(product.product_id)}
                  pic={product.thumbnail}
                  name={product.product_name}
                  description={product.product_description}
                  price={product.price}
                  discount={product.discount}
                  key={index}
                />
              ))}
          </div>
          <div className='mt-8 md:hidden block'>
            <Link
              href='/shop'
              className='bg-orange  md:mt-0 hover:bg-black duration-1000 text-white rounded-full px-5 py-3'
            >
              View All Deals
            </Link>
          </div>
        </div>
        {/* ************cotegory slide************ */}
        <div className=' py-4 md:py-20 gap-5'>
          <CotegorySlider />
        </div>
        {/* *********tags ****** */}
        <div className='py-5'>
          <div className='my-4 py-0 text-gray capitalize  bg-light_gray'>
            <ul className='flex px-2 cursor-pointer md:px-0 md:justify-center gap-10 overflow-auto text-xl bg-light_gray'>
              {allTags?.length > 0 &&
                allTags?.map((tag, i) => {
                  return (
                    <li
                      key={i}
                      className='font-serif text-xl border-b-4 text-nowrap border-transparent text-gray hover:text-orange hover:border-orange py-4'
                      onClick={() => tagFilter(tag.name)}
                    >
                      {tag.name}
                    </li>
                  )
                })}
            </ul>
          </div>
          {/* ***tags show by filter**** */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-10 md:gap-12'>
            {filterTag.length > 0 &&
              filterTag?.map((product, index) => (
                <ProductCard
                  toto={() => seeDetails(product.id)}
                  pic={product.thumbnail}
                  name={product.product_name}
                  description={product.product_description}
                  price={product.price}
                  discount={product.discount}
                  key={index}
                />
              ))}
          </div>
          <Link href='/shop' className='flex justify-center pt-8'>
            <div className='bg-orange hover:bg-black duration-1000 text-white rounded-full px-6 py-3'>
              View More
            </div>
          </Link>
        </div>
        {/* ********newsletter******* */}
        <div className='py-8'>
          <div className=' block md:flex bg-light_gray w-auto h-auto py-8 px-4 rounded-lg'>
            <div className='md:pl-8 mt-5 md:mt-8 w-full md:w-1/2'>
              <h1 className='text-lg md:text-2xl mt-3'>
                Subscribe to our newsletter
              </h1>
              <h1 className='text-xl md:text-5xl mt-2 md:mt-5'>
                Get 20% <span className='font-bold'>Flat Discount</span>
              </h1>
              <div className='block md:flex items-center py-8 gap-5'>
                <div>
                  <input
                    type='text'
                    id='first_name'
                    className='bg-gray-50 border rounded-md border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-80  py-3'
                    placeholder='Enter Your Email'
                    required
                  />
                </div>
                <button className='bg-black mt-4 md:mt-0 text-white hover:bg-orange duration-1000 rounded-lg w-full md:w-40  py-3 '>
                  Subscribe
                </button>
              </div>
            </div>
            <div className='w-full md:w-1/2 flex justify-end'>
              <img
                className='object-cover group-hover:scale-110 duration-1000 w-auto h-auto md:h-72 '
                src={'/newslatter.webp'}
                alt='logo'
              />
            </div>
          </div>
        </div>
        {/* **************** */}
        <div className='py-8'>
          <div className='flex flex-col md:flex-row md:justify-center gap-14 bg-light_gray w-auto h-auto py-8 px-4 rounded-lg'>
            <img
              className='object-cover m-auto w-28 h-20 md:w-auto md:h-auto'
              src={'/Brands/Brand-1.png'}
              alt='logo'
            />{' '}
            <img
              className='object-cover m-auto w-28 h-20 md:w-auto md:h-auto '
              src={'/Brands/Brand-2.webp'}
              alt='logo'
            />{' '}
            <img
              className='object-cover m-auto w-28 h-20 md:w-auto md:h-auto '
              src={'/Brands/Brand-3.png'}
              alt='logo'
            />{' '}
            <img
              className='object-cover m-auto w-28 h-20 md:w-auto md:h-auto '
              src={'/Brands/Brand-4.webp'}
              alt='logo'
            />{' '}
            <img
              className='object-cover m-auto w-28 h-20 md:w-auto md:h-auto '
              src={'/Brands/Brand-5.webp'}
              alt='logo'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default page
