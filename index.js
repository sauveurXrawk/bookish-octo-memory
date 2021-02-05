import { getAll, findById,findByIndex } from '../pages/api/storage/init';
import Store from './store'
import AddToStore from './store/utils/add'


export {getAll, findById, findByIndex, Store,AddToStore}


import {GetBanks} from './io'
import GuapModels from './models/guap'
import PlugModels from './models/plug'
import OldGuardModel from './models/oldguard'
import ModernForm from './form'
import Notice from './notice'

export {GetBanks,GuapModels,PlugModels,ModernForm,Notice,OldGuardModel}



import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link'
import Image from 'next/image'

export {Link,useRouter,useEffect,useState,Image}


import Choice from './design/choice'

export {Choice}


import { getLocalStorage, setLocalStorage,$getLocalStorage, $setLocalStorage } from '../core/technical/core/utility';
import styles from 'sauveur_style'
import Head from './head'

export {Head,styles,setLocalStorage,getLocalStorage,$setLocalStorage,$getLocalStorage}


//models

import {CleanOrder,InitProduct,cleanProduct} from './models/utils'


export {CleanOrder,InitProduct,cleanProduct}