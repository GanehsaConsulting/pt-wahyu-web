import { LiaCertificateSolid, LiaMapSolid, LiaSplotchSolid, LiaMagicSolid } from "react-icons/lia";

export const about = "PT Wahyu Tatawasana adalah perusahaan yang berdiri sejak 1991, fokus pada distribusi hasil laut berkualitas seperti ikan, lobster, udang, dan kepiting. Kami bekerja sama dengan mitra terpercaya untuk memastikan kesegaran dan keamanan setiap produk yang kami tawarkan."

export const mvm = {
    motto: "Menyajikan Hasil Laut Berkualitas dengan Komitmen pada Keberlanjutan.",
    visi: "Menjadi pemimpin dalam industri perikanan yang menyediakan produk berkualitas, ramah lingkungan, dan memenuhi kebutuhan pasar.",
    misi: (
        <>
            <p>
                Menyediakan produk laut segar dan berkualitas.
            </p>
            <p>
                Mendukung perikanan berkelanjutan dan melindungi ekosistem laut.
            </p>
            <p>
                Menawarkan layanan pelanggan responsif dan solutif.
            </p>
            <p>
                Terus berinovasi dengan teknologi terbaru.
            </p>
        </>
    )
}

export const founder = {
    speech: (
        <>
            <div className="text-lg font-medium">
                Sebagai pendiri PT Wahyu Tatawasana, saya percaya bahwa inovasi dan keberlanjutan adalah kunci masa depan industri perikanan. Dengan menjaga keseimbangan ekosistem laut, kita memastikan kesejahteraan bagi generasi mendatang.
                <br />
                <div className="font-semibold mt-10">
                    Gina Erry Hernawaty
                    <br />
                    Founder PT Wahyu Tatawasana
                </div>
            </div>
        </>

    ),
    img: "https://res.cloudinary.com/dzrh2ogbn/image/upload/v1721892645/TBN%20ASSET/bviukcx6jiporkgx1w7i.webp"
}

export const DataAreaKerja = [
    {
        id: 'slide1',
        next: '#slide2',
        prev: '#slide5',
        lokasi: 'Sorong',
        img: 'https://media.istockphoto.com/id/536966872/id/foto/cagar-alam-laut-panorama-raja-ampat-di-new-guinea.jpg?s=612x612&w=0&k=20&c=yKOlF2ef_WXc89xjfxvm-KTuirTBVfFfm8Me8r9fxGc=',
    },
    {
        id: 'slide2',
        next: '#slide3',
        prev: '#slide1',
        lokasi: 'Papua Barat',
        img: 'https://media.istockphoto.com/id/965838422/id/foto/gubuk-bambu-antara-beberapa-bebatuan-di-bawah-hujan-di-teluk-dengan-bendera-indonesia-kepulauan.jpg?s=612x612&w=0&k=20&c=wPejqpIauOmyn0wQU61UYc5PwnsKQdYWSWYkmF3MqEc=',
    },
    {
        id: 'slide3',
        next: '#slide4',
        prev: '#slide2',
        lokasi: 'Fak - Fak',
        img: 'https://media.istockphoto.com/id/1328802089/id/foto/tenang.jpg?s=612x612&w=0&k=20&c=oOO9GrU4BZptFGeeB-rSz4Nf7-dHH4HwEpomJIuwLFg=',
    },
    {
        id: 'slide4',
        next: '#slide5',
        prev: '#slide3',
        lokasi: 'Seram',
        img: 'https://media.istockphoto.com/id/135813923/id/foto/sebuah-wonderpus.jpg?s=612x612&w=0&k=20&c=wiUM1pxiBv52YFA_THlX9YyM9O7xXD4F6dQOH6x_wGs=',
    },
    {
        id: 'slide5',
        next: '#slide1',
        prev: '#slide4',
        lokasi: 'Ambon',
        img: 'https://media.istockphoto.com/id/174968255/id/foto/kapal-nelayan-di-panggung-indonesia.jpg?s=612x612&w=0&k=20&c=t9E_u9WVXzyghjJ7eqCEEnci-gGtmTwbD7DzgMG9RuM=',
    },
]

export const DataProducts = {
    udang: {
        label: 'Udang - Udangan',
        lists: [
            {
                name: 'Lobster',
                img: 'https://res.cloudinary.com/dzrh2ogbn/image/upload/v1726297763/PT%20Wahyu%20Asset/Ikan/8da807253e49e73e9201031226241cff.webp',
                description: 'Lobster adalah jenis udang besar yang memiliki cangkang keras dan daging yang lembut dan manis. Ideal untuk hidangan laut mewah seperti lobster thermidor atau lobster panggang.'
            },
            {
                name: 'Udang Banana',
                img: 'https://res.cloudinary.com/dzrh2ogbn/image/upload/v1726297764/PT%20Wahyu%20Asset/Ikan/af816611484081de6b25d85a6df3d82a.webp',
                description: 'Udang Banana dikenal karena ukurannya yang sedang dan rasa manis alaminya. Udang ini sangat cocok untuk berbagai hidangan seperti udang goreng tepung atau udang saus tiram.'
            },
            {
                name: 'Udang Tiger',
                img: 'https://res.cloudinary.com/dzrh2ogbn/image/upload/v1726297765/PT%20Wahyu%20Asset/Ikan/ec9e329c5c7b01b0b7f32753408fe900.webp',
                description: 'Udang Tiger adalah salah satu jenis udang terbesar dengan garis-garis hitam dan oranye di cangkangnya. Dagingnya padat dan cocok untuk dipanggang, disate, atau dimasak dengan saus pedas.'
            }
        ]
    },
    kepiting: {
        label: 'Kepiting',
        lists: [
            {
                name: 'Kepiting Bakau',
                img: 'https://res.cloudinary.com/dzrh2ogbn/image/upload/v1726297764/PT%20Wahyu%20Asset/Ikan/07a49b039990d49e5d31838f2f0808a7.webp',
                description: 'Kepiting Bakau adalah jenis kepiting yang memiliki cangkang keras dan daging yang kaya rasa. Biasanya digunakan untuk masakan seperti kepiting saus Padang atau kepiting asam manis.'
            }
        ]
    },
    teripang: {
        label: 'Teripang',
        lists: [
            {
                name: 'Teripang',
                img: 'https://res.cloudinary.com/dzrh2ogbn/image/upload/v1726297763/PT%20Wahyu%20Asset/Ikan/3f4f4ddcf9457abbb04406b5bf9f3049.webp',
                description: 'Teripang, juga dikenal sebagai sea cucumber, adalah hewan laut yang dikenal memiliki manfaat kesehatan tinggi. Biasa digunakan dalam masakan Asia seperti sup teripang atau teripang tumis.'
            },
            {
                name: 'Teripang Susu',
                img: 'https://res.cloudinary.com/dzrh2ogbn/image/upload/v1726297767/PT%20Wahyu%20Asset/Ikan/4f71e1cfda3a39646e0d5e6f1442579d.webp',
                description: 'Teripang Susu adalah jenis teripang dengan tekstur yang lembut dan rasa yang ringan. Sangat cocok untuk digunakan dalam hidangan kaldu yang ringan atau sebagai bahan utama dalam hidangan kesehatan.'
            }
        ]
    },
    ikan: {
        label: 'Ikan-ikanan',
        lists: [
            {
                name: 'Kakap Merah',
                img: 'https://res.cloudinary.com/dzrh2ogbn/image/upload/v1726297763/PT%20Wahyu%20Asset/Ikan/a549aba7c196b23f314bfe74ce22f64b.webp',
                description: 'Kakap Merah adalah ikan dengan daging tebal berwarna putih yang memiliki cita rasa ringan namun kaya. Sering digunakan dalam masakan goreng atau dipanggang dengan bumbu rempah.'
            },
            {
                name: 'Kakap Sawo/Telo',
                img: 'https://res.cloudinary.com/dzrh2ogbn/image/upload/v1726297764/PT%20Wahyu%20Asset/Ikan/ff6d1557e72018260add7d0e64251077.webp',
                description: 'Kakap Sawo, juga dikenal sebagai Kakap Telo, memiliki tekstur daging yang lembut dan rasa lezat yang ringan. Sangat cocok untuk diolah menjadi fillet ikan goreng atau panggang.'
            },
            {
                name: 'Tenggiri',
                img: 'https://res.cloudinary.com/dzrh2ogbn/image/upload/v1726297764/PT%20Wahyu%20Asset/Ikan/04c9597db49a8d68da399f1529dd54dd.webp',
                description: 'Tenggiri adalah ikan laut yang banyak digunakan dalam masakan khas seperti pempek atau kerupuk ikan. Dagingnya yang kenyal dan kaya protein membuatnya populer di berbagai hidangan.'
            },
            {
                name: 'Kerapu',
                img: 'https://res.cloudinary.com/dzrh2ogbn/image/upload/v1726297763/PT%20Wahyu%20Asset/Ikan/6f7ad0e21f059cf05624e83b0e214953.webp',
                description: 'Ikan Kerapu dikenal dengan dagingnya yang tebal dan lembut. Sering digunakan dalam masakan sup ikan atau dikukus dengan rempah untuk menjaga kelembutan dagingnya.'
            },
            {
                name: 'Somasi/Lencam',
                img: 'https://res.cloudinary.com/dzrh2ogbn/image/upload/v1726297765/PT%20Wahyu%20Asset/Ikan/f4a06b1d5e0592a3405cfd40b936f857.webp',
                description: 'Somasi atau Lencam adalah ikan dengan daging yang lembut dan rasa ringan. Biasanya diolah dengan cara dipanggang atau dijadikan bahan sup laut.'
            },
            {
                name: 'Mubara',
                img: 'https://res.cloudinary.com/dzrh2ogbn/image/upload/v1726297766/PT%20Wahyu%20Asset/Ikan/f16b68f353d02d14efdea7e541866594.webp',
                description: 'Ikan Mubara memiliki daging yang lezat dan serbaguna. Ikan ini sering dimasak dengan berbagai cara seperti dipanggang, digoreng, atau disajikan dalam masakan berkuah.'
            },
            {
                name: 'Barakuda',
                img: 'https://res.cloudinary.com/dzrh2ogbn/image/upload/v1726297768/PT%20Wahyu%20Asset/Ikan/40861c78d1df7bb8ec3d2fb2abeb78cb.webp',
                description: 'Barakuda adalah ikan predator laut dengan tekstur daging yang kuat dan rasa yang intens. Cocok untuk dipanggang atau dibuat menjadi sup laut yang kaya rasa.'
            },
            {
                name: 'Tola',
                img: 'https://res.cloudinary.com/dzrh2ogbn/image/upload/v1726297768/PT%20Wahyu%20Asset/Ikan/ce956358a11ba2607e63c2b51da93d4c.webp',
                description: 'Ikan Tola memiliki daging yang padat dan rasanya yang lembut, sering kali digunakan dalam masakan tradisional panggang atau rebus dengan rempah-rempah lokal.'
            },
            {
                name: 'Tuna',
                img: 'https://res.cloudinary.com/dzrh2ogbn/image/upload/v1726297768/PT%20Wahyu%20Asset/Ikan/50929b8eaa434db38dfeed754d734374.webp',
                description: 'Tuna adalah ikan yang sangat populer dengan daging padat dan kaya protein. Sering disajikan mentah sebagai sashimi, atau dipanggang dan dijadikan steak.'
            },
            {
                name: 'Baby Tuna',
                img: 'https://res.cloudinary.com/dzrh2ogbn/image/upload/v1726297765/PT%20Wahyu%20Asset/Ikan/5112e31de24fbddb565cfe5346019034.webp',
                description: 'Baby Tuna adalah versi lebih kecil dari Tuna, dengan tekstur daging yang lembut. Cocok untuk masakan ringan seperti salad tuna atau dipanggang.'
            },
            {
                name: 'Lamadang/Mahi',
                img: 'https://res.cloudinary.com/dzrh2ogbn/image/upload/v1726297765/PT%20Wahyu%20Asset/Ikan/532737d8e030d09e99b97c543db7649b.webp',
                description: 'Ikan Lamadang atau Mahi-mahi memiliki daging yang ringan dan sedikit manis. Sering diolah dengan cara dipanggang atau ditumis untuk hidangan yang sederhana namun lezat.'
            },
            {
                name: 'Cakalang',
                img: 'https://res.cloudinary.com/dzrh2ogbn/image/upload/v1726297767/PT%20Wahyu%20Asset/Ikan/7d9f8a564f392a5a5a0af9af41f671dd.webp',
                description: 'Cakalang adalah ikan yang dikenal dengan rasa dagingnya yang kaya. Sering diolah menjadi ikan asap atau digunakan dalam masakan tradisional Indonesia seperti rica-rica.'
            },
            {
                name: 'Tongkol batik',
                img: 'https://res.cloudinary.com/dzrh2ogbn/image/upload/v1726297764/PT%20Wahyu%20Asset/Ikan/a773ab016274a808cccffa2e5e144fab.webp',
                description: 'Ikan Tongkol Batik memiliki daging yang keras dan kaya akan rasa. Sering diolah menjadi ikan asap atau masakan bersantan seperti gulai tongkol.'
            },
            {
                name: 'Komo',
                img: 'https://res.cloudinary.com/dzrh2ogbn/image/upload/v1726297766/PT%20Wahyu%20Asset/Ikan/3b0bd7be371502af93704ee498bf7f27.webp',
                description: 'Ikan Komo adalah ikan laut dengan daging tebal dan rasa yang kaya. Cocok untuk berbagai masakan seperti tumis ikan atau dibuat menjadi hidangan sup.'
            },
            {
                name: 'Sambilang/Mayung',
                img: 'https://res.cloudinary.com/dzrh2ogbn/image/upload/v1726297767/PT%20Wahyu%20Asset/Ikan/6efcc281178628992931e1364ae02ccf.webp',
                description: 'Ikan Sambilang atau Mayung adalah ikan laut dengan daging lembut yang sering dimasak dengan cara dikukus atau dijadikan sup ikan yang kaya akan gizi.'
            },
            {
                name: 'Layar Merah',
                img: 'https://res.cloudinary.com/dzrh2ogbn/image/upload/v1726297765/PT%20Wahyu%20Asset/Ikan/f3387963b5393bdc9c93b73092a3429d.webp',
                description: 'Ikan Layar Merah dikenal dengan bentuk tubuhnya yang besar dan daging yang tebal. Sering dimasak dengan cara dipanggang atau dibuat menjadi fillet untuk steak ikan.'
            },
            {
                name: 'Layar Putih/Marlin',
                img: 'https://res.cloudinary.com/dzrh2ogbn/image/upload/v1726297767/PT%20Wahyu%20Asset/Ikan/5c57e2dc8b154120ece04c4d1a4b9cdc.webp',
                description: 'Ikan Marlin, juga dikenal sebagai Layar Putih, adalah ikan besar dengan daging yang padat. Sering diolah menjadi steak atau dimasak dengan saus krim untuk hidangan mewah.'
            },
            {
                name: 'Kembung',
                img: 'https://res.cloudinary.com/dzrh2ogbn/image/upload/v1726297768/PT%20Wahyu%20Asset/Ikan/50929b8eaa434db38dfeed754d734374.webp',
                description: 'Ikan Kembung adalah ikan dengan daging lembut dan rasa yang lezat. Cocok untuk digoreng garing atau dibuat menjadi ikan bakar dengan bumbu pedas.'
            },
            {
                name: 'Awe/Lema Gepeng',
                img: 'https://res.cloudinary.com/dzrh2ogbn/image/upload/v1726297766/PT%20Wahyu%20Asset/Ikan/f22c5bd59edd1103c1f3d421ae465a01.webp',
                description: 'Ikan Awe atau Lema Gepeng adalah ikan dengan tekstur daging yang halus dan rasanya yang ringan. Sering digunakan dalam masakan goreng atau rebus.'
            }
        ]
    }
}

export const dataWhyUs = [
    {
        icon: <LiaCertificateSolid />,
        title: "Kualitas Terjamin",
        description: "Kami memastikan setiap produk perikanan melewati seleksi ketat untuk menjaga kesegaran dan standar tertinggi."
    },
    {
        icon: <LiaMagicSolid/>,
        title: "Tim Profesional",
        description: "Didukung oleh para ahli berpengalaman, kami memastikan setiap langkah produksi berjalan efisien."
    },
    {
        icon: <LiaMapSolid/>,
        title: "Jaringan Distribusi Luas",
        description: "Produk kami didistribusikan secara cepat dan tepat waktu, menjaga kesegaran hingga ke tangan Anda."
    },
    {
        icon: <LiaSplotchSolid/>,
        title: "Layanan Unggul",
        description: "Kami selalu siap dengan pelayanan responsif dan solutif untuk kebutuhan Anda."
    }
];

export const DataContact = {
    addressMain: {
        label: "Head Office",
        location: "Sahid Sudirman Centre, Jl. Jenderal Sudirman No.86 56th Floor, Karet Tengsin, Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10220",
        link: "https://maps.app.goo.gl/JMEBNf6xZDKTPd5N7",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4007.7160582570773!2d106.81607162499031!3d-6.210922393776956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f4026d88f493%3A0x8ad09c612d1b433c!2sCEO%20SUITE%20Sahid%20Sudirman%20Center%2056th%20fl!5e1!3m2!1sid!2sid!4v1726461939835!5m2!1sid!2sid"
    },
    addresSec: {
        label: "Branch Office",
        location: "JI. Workah Km. 9 Kota Sarong Papua Barat Daya",
        link: ""
    },
    addressThird: {
        label: "Virtual Office",
        location: "MTH Square, Jl. Letjen M.T. Haryono No.Kav 10 GF A4/A, Cawang, Kecamatan Jatinegara, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13330",
        link: "https://maps.app.goo.gl/HkGL3UDd2rza9zjr6",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63452.9618569589!2d106.79873745015135!3d-6.288671736400421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e0d899f805%3A0x622f2a1fdceaa2c3!2sINFINITI%20OFFICE%20%7C%20Virtual%20Office%20Jakarta%20Timur!5e0!3m2!1sid!2sid!4v1721888698423!5m2!1sid!2sid"
    },
    contact: {
        name: 'Information',
        data: '+6281310682810',
        link: 'tel:+6281310682810'
    },
    contactMarketing: {
        name: 'Marketing',
        data: '+6282246494308',
        link: 'tel:+6282246494308'
    },
    mail: {
        name: "Email",
        data: 'wahyutatawasana.pt@gmail.com',
        link: 'mailto:wahyutatawasana.pt@gmail.com'
    }
}

export const DataFAQ = [
    {
      question: "Produk perikanan apa saja yang Anda sediakan?",
      answer: "Kami menawarkan produk perikanan yang diambil dari sumber berkelanjutan, termasuk ikan, udang, dan berbagai jenis hasil laut lainnya."
    },
    {
      question: "Bagaimana PT Wahyu Tatawasana memastikan praktik keberlanjutan?",
      answer: "Kami bekerja sama dengan komunitas lokal dan nelayan yang menjalankan praktik ramah lingkungan untuk menjaga kelestarian laut."
    },
    {
      question: "Apakah produk yang disediakan ramah lingkungan?",
      answer: "Semua produk kami berasal dari sumber yang berkelanjutan dan diolah sesuai dengan standar lingkungan yang ketat."
    },
    {
      question: "Bagaimana cara memesan dalam jumlah besar?",
      answer: "Hubungi tim kami melalui halaman “Kontak Kami” untuk mendiskusikan kebutuhan pemesanan Anda. Kami akan memastikan setiap langkah berjalan lancar."
    },
    {
      question: "Mengapa memilih produk dari PT Wahyu Tatawasana?",
      answer: "Selain kualitas tinggi dan kesegaran produk, kami berkomitmen untuk menjaga lingkungan laut yang berkelanjutan dalam setiap aspek operasional kami."
    }
  ];