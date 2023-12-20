import Image from 'next/image'
import Link from 'next/link'
import Navbar from "@/components/Navbar";
import CardTeam from "./_components/CardTeam";

import Riyadh from '../../../public/img/team/riyadh.png'
import Rahmat from '../../../public/img/team/rahmat.png'
import Ilham from '../../../public/img/team/ilham.png'
import Heri from '../../../public/img/team/heri.png'
import Angga from '../../../public/img/team/angga.png'
import Nury from '../../../public/img/team/nuryy.png'
import Alif from '../../../public/img/team/alif.png'
import BgImg from '../../../public/img/home.png'

function page() {
  return (
    <>
      <Navbar />
      <Image
        alt="home"
        src={BgImg}
        quality={70}
        style={{
          position: 'fixed',
          zIndex: '-10',
          backgroundSize: 'cover',
          width: '100%',
          height: '100vh'
        }}
      />
      <section className='w-full h-screen bg-opacity-70 bg-main'>
        <div className="w-full sm:w-2/5 h-full p-5 bg-main sm:p-20 flex flex-col gap-10 justify-center items-start">
          <h2 className="text-[2rem] sm:text-[3rem] font-bold text-white">GEDANGLIS</h2>
          <p className="p-5 border-l-2 text-justify text-white">Merupakan produk inovasi dari tim Hibah-MBKM Baskara. Gerobak ini mendukung
            perekonomian yang ada di Indonesia dengan konsep gerobak yang dapat berkeliling.
            Gedanglis ini dilengkapi dengan motor listrik sehingga memudahkan pedagang untuk
            berpindah tempat. Selain itu Gedanglis dilengkapi dengan sistem tracking sehingga pembeli dapat mengetahui lokasi Gedanglis.</p>
          <Link href="#service" className="px-7 py-3 bg-blue-500  transition-all hover:scale-110 rounded-3xl text-white">Read More</Link>
        </div>
      </section>
      <section id="service" className='w-full h-max bg-secondary flex justify-end'>
        <div className="w-full sm:w-3/5 h-full bg-main p-5 sm:p-20 flex flex-col gap-10 justify-center items-end">
          <h2 className="text-[2rem] sm:text-[3rem]font-bold text-white">Teknik Elektro UNS</h2>
          <p className="p-5 border-r-2 text-justify text-white">Program Studi Teknik Elektro merupakan salah satu program studi di Fakultas Teknik Universitas Sebelas Maret (UNS) Surakarta yang berdiri sejak tanggal 29 April 2014 melalui Surat Keputusan Menteri Pendidikan dan Kebudayaan No. 17/E/O/2014.
            Kurikulum Program Studi Teknik Elektro UNS berpegang pada pedoman FORTEI (Forum Pendidikan Tinggi Teknik Elektro Indonesia) merupakan ringkasan yang disusun bersama tim asesor BAN PT (Badan Akreditasi Nasional Perguruan Tinggi) tahun 2011 , yang akan digunakan sebagai acuan BAN PT dalam menjaga kualitas perguruan tinggi di Indonesia. Pedoman Pengelolaan Program Studi Teknik Elektro tersebut meliputi : Bidang Peminatan, Kurikulum, Laboratorium dan Sumber Daya Manusia.
          </p>
          <Link href="https://elektro.ft.uns.ac.id" className="px-7 py-3 bg-blue-500  transition-all hover:scale-110 rounded-3xl text-white">Read More</Link>
        </div>
      </section>
      <section className='w-full h-max bg-secondary bg-opacity-80'>
        <div className="w-full sm:w-3/5 h-full bg-main p-5 sm:p-20 flex flex-col gap-10 justify-center items-start">
          <h2 className="text-[2rem] sm:text-[3rem] font-bold text-white">Baskara</h2>
          <p className="p-5 border-l-2 text-justify text-white">Kenalkan kami adalah tim riset terpadu bimbingan dari Teknik Elektro UNS yang sudah meriset projek Keberlanjutan dan kegiatan lomba di nasional.
            Visi mewujudkan mahasiswa teknik elektro yang berkompeten, mandiri, dan bermutu dengan berpedoman pada visi teknik elektro.<br /><br />
            Misi
            menyediakan komunitas yang sehat dan terpadu untuk teknik elektro, menjadi wadah pengembangan diri untuk teknik elektro, mengangkat nama teknik elektro UNS ke rancah nasional, dan mengembangkan semua mahasiswa elektro UNS untuk menjadi mahasiswa yang berkompeten
            Baskara telah mendedikasikan staff dalam pengembangan ilmu teknologi dan informasi untuk meningkatkan mutu kualitas mahasiswa teknik elektro UNS yang
            berprestasi dan unggul serta dapat membuka kreatifitas mahasiswa.<br /><br />
            Baskara memiliki motto "<i className='font-bold '>Menembus Batas, Wujudkan Kemajuan</i>" yang menjadi jargon dan pilar yang mencerminkan kualitas dari mahasiswanya. <br></br>Baskara</p>
        </div>
      </section>
      <section className="w-full h-max p-10 bg-main flex flex-col justify-center items-center bg-opacity-80">
        <h2 className="text-[3rem] font-bold text-white border-b-2 mb-10">Our Team</h2>
        <div className="flex flex-wrap sm:gap-5 gap-10 items-center justify-center">
          <CardTeam image={Riyadh} nama={"Riyadh Pratama Saputra"} role={"Chief Executive Team"}>
            Team Leader, Research coordinator and management Supervisor
          </CardTeam>
          <CardTeam image={Rahmat} nama={"Rahmat Rohmani"} role={"Staff Executive Team"}>
            Frontend development, Data Executor, Website Environment
          </CardTeam>
          <CardTeam image={Heri} nama={"Wahyu Heriyanto"} role={"Staff Executive Team"}>
            Internet Development, SIM Card Research, HTTP upload executor
          </CardTeam>
          <CardTeam image={Angga} nama={"M Erlangga"} role={"Staff Executive Team"}>
            Manufacturing Research, Autocad 3D Desaining, GPS Writing System
          </CardTeam>
          <CardTeam image={Ilham} nama={"M Ilham Alghifari"} role={"Staff Executive Team"}>
            HTTP Integration, GPS Integration, UI/UX Interface Desainer
          </CardTeam>
          <CardTeam image={Nury} nama={"Nury Rachma Fitriani"} role={"Staff Executive Team"}>
            Wiring Component, Electric Wiring, PCB Soldering
          </CardTeam>
          <CardTeam image={Alif} nama={"M Alif Rizky Naufal>"} role={"Staff Executive Team"}>
            Backend Development, Database Executive, Routing Tracker
          </CardTeam>
        </div>
      </section>
    </>
  )
}

export default page