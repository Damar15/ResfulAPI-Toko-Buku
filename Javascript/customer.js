$(function (){

    var $creates = $('#creates');
    var $idPelanggan = $('#idPelanggan');
    var $namaPelanggan = $('#namaPelanggan');
    var $kotaPelanggan = $('#kotaPelanggan');
    var $kodePos = $('#kodePos');
    var $alamatPelanggan = $('#alamatPelanggan');

    $.ajax({
        type: 'GET',
        url: 'https://apex.oracle.com/pls/apex/project_bdt/toko_buku/allcust/',
        success: function(creates){
            console.log('success', creates);
            $.each(creates.items, function(i){
                $creates.append('<tr>' + 
                '<td>' + creates.items[i]["id pelanggan"] + '</td>' + 
                '<td>' + creates.items[i]["nama pelanggan"] + '</td>' + 
                '<td>' + creates.items[i]["kota pelanggan"] + '</td>' + 
                '<td>' + creates.items[i]["kode pos"] + '</td>' +  
                '<td>' + creates.items[i]["alamat pelanggan"]+'</td>' + 
                '</tr>')
            });
        },
        error: function() {
            alert('Gagal memuat daftar pelanggan');
        }
    });

    $('#add-cust').on('click', function(){

        var cust = {
            id_pelanggan: $idPelanggan.val(),
            nama_pelanggan: $namaPelanggan.val(),
            kota_pelanggan: $kotaPelanggan.val(),
            kode_pos: $kodePos.val(),
            alamat_pelanggan: $alamatPelanggan.val(),
        };

    $.ajax({
            type: 'POST',
            url: 'https://apex.oracle.com/pls/apex/project_bdt/toko_buku/allcust/',
            data: cust,
            success:function() {
                $creates.append('<tr>' + 
                '<td>' + cust.id_pelanggan + '</td>' + 
                '<td>' + cust.nama_pelanggan + '</td>' + 
                '<td>' + cust.kota_pelanggan + '</td>' + 
                '<td>' + cust.kode_pos + '</td>' +  
                '<td>' + cust.alamat_pelanggan +'</td>' + 
                '</tr>')
            },
            error:function(){
                alert('Gagal menyimpan pelanggan');
            }
        });

    });

    
});