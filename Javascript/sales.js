$(function (){

    var $creates = $('#creates');

    $.ajax({
        type: 'GET',
        url: 'https://apex.oracle.com/pls/apex/project_bdt/toko_buku/sales/',
        success: function(creates){
            console.log('success', creates);
            $.each(creates.items, function(i){
                $creates.append('<tr>' + 
                '<td>' + creates.items[i]["tanggal transaksi"] + '</td>' + 
                '<td>' + creates.items[i]["banyaknya buku terjual"] + '</td>' +
                '</tr>')
            });
        },
        error: function() {
            alert('Gagal memuat daftar penjualan');
        }
    });

    
});