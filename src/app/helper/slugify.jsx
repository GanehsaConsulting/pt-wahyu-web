export default function slugify(string) {
    return string
        .toLowerCase() // Ubah ke huruf kecil
        .replace(/[^a-z0-9\s-]/g, '') // Hapus karakter non-alphanumeric kecuali spasi dan strip
        .replace(/\s+/g, '-') // Ganti spasi dengan strip
        .replace(/-+/g, '-') // Ganti beberapa strip dengan satu strip
        .trim(); // Hapus spasi di awal dan akhir
}

export function lowerC(string) {
    return string
        .toLowerCase() // Ubah ke huruf kecil
}

export function toText(string) {
    return string
    .replace(/-/g, ' ') // Mengganti semua '-' dengan spasi
    .replace(/^\w/, (c) => c.toUpperCase()) // Mengubah huruf pertama menjadi kapital
    .replace(/\s+(\w)/g, (match, p1) => ' ' + p1.toUpperCase())  // Mengubah huruf pertama menjadi kapital
}