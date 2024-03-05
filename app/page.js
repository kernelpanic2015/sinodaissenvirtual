// page.js
'use client'
import useSound from 'use-sound';
import boopSfx from '/bowl.mp3';
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
<FontAwesomeIcon icon="fa-regular fa-bell" />

import Daissenlog from './daissen-logo.png';

export default function Home() {
  const [play] = useSound(boopSfx);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#f7f7f7] p-4 sm:p-8 lg:p-12">
      <Image src={Daissenlog} alt="Daissen Logo" width={227} height={59} className="mb-8" />
      <button onClick={play} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center">
        <FontAwesomeIcon className='mr-2 sm:mr-4' icon={faBell} />
        <span>Sino</span>
      </button>
      <hr className="my-8 w-full border-gray-400" />
      <h3 className="text-lg font-semibold mb-4">Como compartilhar o áudio com conteúdo compartilhado</h3>
      <ol className="list-decimal mb-4 ml-4">
        <li>Inicie ou ingresse em uma reunião Zoom.</li>
        <li>Clique em Compartilhar tela  na barra de ferramentas.</li>
        <li>Selecione o programa ou área de trabalho que você deseja compartilhar.</li>
        <li>Selecione Compartilhar som no canto inferior esquerdo da janela de seleção de compartilhamento.</li>
      </ol>
      <p className="mb-4">O compartilhamento do áudio do dispositivo também pode ser habilitado após começar a compartilhar. Localize a barra de ferramentas de compartilhamento, clique em Mais e selecione Compartilhar som.</p>     
      <hr className="my-8 w-full border-gray-400" />
    </main>
  );
}
