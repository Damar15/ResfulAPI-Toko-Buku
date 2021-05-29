$(function (){

    var $creates = $('#creates');
    var $idTransaksi = $('#idTransaksi');
    var $tanggalTransaksi = $('#tanggalTransaksi');
    var $idPelanggan = $('#idPelanggan');
    var $idBuku = $('#idBuku');

    $.ajax({
        type: 'GET',
        url: 'https://apex.oracle.com/pls/apex/project_bdt/toko_buku/alltransactions/',
        success: function(creates){
            console.log('success', creates);
            $.each(creates.items, function(i){
                $creates.append('<tr>' + 
                '<td>' + creates.items[i]["id transaksi"] + '</td>' + 
                '<td>' + creates.items[i]["tanggal transaksi"] + '</td>' + 
                '<td>' + creates.items[i]["id buku dibeli"] + '</td>' + 
                '<td>' + creates.items[i]["id pembeli"] + '</td>' +
                '</tr>')
            });
        },
        error: function() {
            alert('Gagal memuat daftar transaksi');
        }
    });

    $('#add-transaksi').on('click', function(){

        var cust = {
            id_transaksi: $idTransaksi.val(),
            tanggal_transaksi: $tanggalTransaksi.val(),
            buku_id_buku: $idBuku.val(),
            pelanggan_id_pelanggan: $idPelanggan.val(),
        };

    $.ajax({
            type: 'POST',
            url: 'https://apex.oracle.com/pls/apex/project_bdt/toko_buku/alltransactions/',
            data: cust,
            success:function() {
                $creates.append('<tr>' + 
                '<td>' + cust.id_transaksi + '</td>' + 
                '<td>' + cust.tanggal_transaksi + '</td>' + 
                '<td>' + cust.buku_id_buku + '</td>' + 
                '<td>' + cust.pelanggan_id_pelanggan + '</td>' + 
                '</tr>')
            },
            error:function(){
                alert('Gagal menyimpan transaksi');
            }
        });

    });

    
});