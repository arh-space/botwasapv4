exports.wait = () => {
	return`*「 WAIT 」 Tunggu sebentar yaa sedang di proses~*`
}

exports.succes = () => {
	return`*「 SUCCES 」Okeee udah selesai~*`
}

exports.lvlon = () => {
	return`*「 ENABLE 」 Fitur Leveling di Aktifkan*`
}

exports.lvloff = () => {
	return`*「 DISABLE 」 Fitur Leveling di Non-Aktifkan*`
}

exports.lvlnul = () => {
	return`*「 INFO 」 Hai kak! Level Kamu masih 0, Silahkan Leveling terlebih dahulu yaa~*`
}

exports.lvlnoon = () => {
	return`*「 INFO 」Hai! Fitur Level di Group belum di Aktifkan*`
}

exports.noregis = () => {
	return`*「 BELUM DAFTAR 」*\n\n*Hai kak! Maaf Kamu belum terdaftar sebagai User MYTH Bot :(\n\nSilahkan daftar terlebih dahulu ya :)\n\nCara daftar :  ${prefix}daftar Nama | Umur* \n*Contoh : ${prefix}daftar Rawrrr | 17*`
}

exports.rediregis = () => {
	return`*「 SUDAH DAFTAR 」*\n\n*Hai kak! kamu sudah terdaftar sebagai user di Database Myth bot*`
}

exports.stikga = () => {
	return`*「 ERROR 」Aduh Gagal! :< Coba ulangi beberapa saat lagi yaa~*`
}

exports.linkga = () => {
	return`*「 INFO 」Aduh maaf link tidak valid!*`
}

exports.groupo = () => {
	return`*「GROUP ONLY」*`
}

exports.ownerb = () => {
	return`*「OWNER BOT ONLY」*`
}

exports.ownerg = () => {
	return`*「OWNER GROUP ONLY」*`
}

exports.admin = () => {
	return`*「ADMIN GROUP ONLY」*`
}

exports.badmin = () => {
	return`*「BOT HARUS JADI ADMIN」*`
}

exports.nsfwoff = () => {
	return`*「 INFO 」Fitur NSFW Belum di Aktifkan*`
}

exports.bug = () => {
	return`*「 REPORT 」Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi*`
}

exports.wrongf = () => {
	return`*「 ERROR 」Hai kak! Maaf Format salah/text kosong*`
}

exports.clears = () => {
	return`*「 INFO 」 Clear all Success*`
}

exports.pc = () => {
	return`*「 REGISTRASI 」*\n\nuntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomor bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DATA USER 」*\n\nHai kak! Selamat kamu sudah berhasil mendaftar sebagai user MYTH Bot dengan data berikut: \n\n┏━⊱Nama\n┗⊱${namaUser}\n┏━⊱Nomor\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱Umur\n┗⊱${umurUser}\n┏━⊱Waktu Pendaftaran\n┗⊱${time}\n\n┏━❉ *Nomor Serial* ❉━\n┣⊱${serialUser}\n┗⊱NOTE : Save Nomor Serial ini`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* tidak di temukan\coba tulis *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*「 INFO 」Maaf tapi ${pushname} bukan Owner*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*「 INFO 」Maaf ${pushname} level Kamu belum mencukupi*\n\n*┏⊱level : ${getLevelingLevel(sender)}*\n*┣⊱Jenis Command : ${command}*\n*┗⊱Syarat Level : ${aha}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*「 INFO 」Maaf ${pushname} level Kamu belum mencukupi*\n\n*┏⊱Level : ${getLevelingLevel(sender)}*\n*┣⊱Jenis Command : ${command}*\n*┗⊱Syarat Level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*「 INFO 」Maaf ${pushname} level Kamu belum mencukupi*\n\n*┏⊱Level : ${getLevelingLevel(sender)}*\n*┣⊱Jenis Command : ${command}*\n*┗⊱Syarat Level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*「 INFO 」Maaf ${pushname} level Kamu belum mencukupi*\n\n*┏⊱Level : ${getLevelingLevel(sender)}*\n*┣⊱Jenis Command : ${command}*\n*┗⊱Syarat Level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*「 INFO 」Maaf ${pushname} level Kamu belum mencukupi*\n\n*┏⊱Level : ${getLevelingLevel(sender)}*\n*┣⊱Jenis Command : ${command}*\n*┗⊱Syarat Level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*「 INFO 」Maaf ${pushname} level Kamu belum mencukupi*\n\n*┏⊱Level : ${getLevelingLevel(sender)}*\n*┣⊱Jenis Command : ${command}*\n*┗⊱Syarat Level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku) => { 
	return `
┏━━━⊱  *ABOUT USER*  ⊰━━┓
┣⊱ *Nama* : ${pushname}
┣⊱ *Nomor* : wa.me/${sender.split("@")[0]}
┣⊱ *Wallet* : Rp${uangku}
┣⊱ *XP* : ${getLevelingXp(sender)}/${reqXp}
┣⊱ *Level* : ${getLevelingLevel(sender)}
┣⊱ *User register* : ${_registered.length}
┗━━━⊱  ⸨ *MYTH* ⸩  ⊰━━━━┛


┏━━⊱ *MAKER MENU* ⊰━━┓
┣⊱ *${prefix}sticker*
┣⊱ *${prefix}avengers*
┣⊱ *${prefix}summer*
┣⊱ *${prefix}sandwrite*
┣⊱ *${prefix}metaldark*
┣⊱ *${prefix}dropwater*
┣⊱ *${prefix}greenneon*
┣⊱ *${prefix}neontext*
┣⊱ *${prefix}sumery*
┣⊱ *${prefix}blood*
┣⊱ *${prefix}firework*
┣⊱ *${prefix}lava*
┣⊱ *${prefix}qrcode*

┣━━⊱  *FUN MENU*  ⊰━━━┫
┣⊱ *${prefix}mining*
┣⊱ *${prefix}bisakah*
┣⊱ *${prefix}kapankah*
┣⊱ *${prefix}apakah*
┣⊱ *${prefix}rate*
┣⊱ *${prefix}slap*
┣⊱ *${prefix}tampar*
┣⊱ *${prefix}moddroid*
┣⊱ *${prefix}happymod*
┣⊱ *${prefix}nangis*
┣⊱ *${prefix}cium*
┣⊱ *${prefix}peluk*

┣━━⊱ *MUTUAL* ⊰━━━━━┫
┣⊱ *${prefix}mutual*
┣⊱ *${prefix}next*

┣━━⊱ *MEDIA MENU* ⊰━━┫
┣⊱ *${prefix}quotes*
┣⊱ *${prefix}beritahoax*
┣⊱ *${prefix}brainly*
┣⊱ *${prefix}pinterest*
┣⊱ *${prefix}resepmasakan*
┣⊱ *${prefix}igstalk*
┣⊱ *${prefix}bitly*

┣━━⊱ *YT & SONG* ⊰━━━┫
┣⊱ *${prefix}ytmp3*
┣⊱ *${prefix}ytmp4*
┣⊱ *${prefix}joox*

┣━━⊱  *NSFW MENU*  ⊰━┫
┣⊱ *${prefix}pokemon*
┣⊱ *${prefix}anjing*
┣⊱ *${prefix}blowjob*
┣⊱ *${prefix}nekonime*
┣⊱ *${prefix}husbu*
┣⊱ *${prefix}ranime*

┣━━⊱ *LIMIT & UANG* ⊰━┫
┣⊱ *${prefix}limit*
┣⊱ *${prefix}buylimit*
┣⊱ *${prefix}transfer*
┣⊱ *${prefix}dompet*

┣━━⊱ *GROUP MENU* ⊰━┫
┣⊱ *${prefix}hidetag*
┣⊱ *${prefix}grouplist*
┣⊱ *${prefix}level*
┣⊱ *${prefix}linkgc*
┣⊱ *${prefix}tagall*
┣⊱ *${prefix}setpp*
┣⊱ *${prefix}add*
┣⊱ *${prefix}kick*
┣⊱ *${prefix}setname*
┣⊱ *${prefix}setdesc*
┣⊱ *${prefix}demote*
┣⊱ *${prefix}promote*
┣⊱ *${prefix}listadmin*
┣⊱ *${prefix}group* [buka/tutup]
┣⊱ *${prefix}leveling* [enable/disable]
┣⊱ *${prefix}nsfw* [1/0]
┣⊱ *${prefix}simih* [1/0]
┣⊱ *${prefix}welcome* [1/0]

┣━━⊱ *OWNER MENU* ⊰━┫
┣⊱ *${prefix}bc*
┣⊱ *${prefix}bcgc*
┣⊱ *${prefix}kickall*
┣⊱ *${prefix}setreply*
┣⊱ *${prefix}setprefix*
┣⊱ *${prefix}clearall*
┣⊱ *${prefix}block*
┣⊱ *${prefix}unblock*
┣⊱ *${prefix}leave*
┣⊱ *${prefix}event* [1/0]
┣⊱ *${prefix}clone*
┣⊱ *${prefix}setppbot*

┗━━⊱  ⸨ *MYTH* ⸩  ⊰━━━┛
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
*「 Congratulation 」*
┏⊱ *Nama* : ${pushname}
┣⊱ *Nomor* : wa.me/${sender.split("@")[0]}
┣⊱ *Xp* : ${getLevelingXp(sender)}
┣⊱ *Limit* = +3
┗⊱ *Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*maaf ${pushname} limit hari ini habis*\n*limit di reset setiap jam 24:00*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
sisa limit anda : ${limitCounts}

NOTE : untuk mendapatkan limit. bisa lewat naik level atau buylimit`
}

exports.satukos = () => {
	return`*Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⊱ 「 ATM 」⊰━┓*\n┣⊱ *Nama* : ${pushname}\n┣⊱ *Nomor* : ${sender.split("@")[0]}\n┣⊱ *Uang* : ${uangkau}\n┗━━━━━━━━━━`
}
