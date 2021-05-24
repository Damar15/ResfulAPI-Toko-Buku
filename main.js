$(function (){

    var $creates = $('#creates');

    $.ajax({
        type: 'GET',
        url: 'https://apex.oracle.com/pls/apex/project_bdt/toko_buku/allbooks/',
        success: function(creates){
            console.log('success', creates.items);
            $.each(creates.items, function(i, create){
                $creates.append('<li>id buku: ' + creates.items[i].id_buku + ', Judul buku: ' + creates.items[i].judul_buku + ', Nama penulis: ' + creates.items[i].nama_penulis + ', Rating buku: ' + creates.items[i].rating_buku + ', Harga buku: ' + creates.items[i].harga_buku)
            });
            
        }
    });
});