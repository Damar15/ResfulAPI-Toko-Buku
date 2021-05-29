$(function (){

    var $creates = $('#creates');
    var $idBuku = $('#idBuku');
    var $judulBuku = $('#judulBuku');
    var $namaPenulis = $('#namaPenulis');
    var $ratingBuku = $('#ratingBuku');
    var $hargaBuku = $('#hargaBuku');

    $.ajax({
        type: 'GET',
        url: 'https://apex.oracle.com/pls/apex/project_bdt/toko_buku/allbooks/',
        success: function(creates){
            console.log('success', creates);
            $.each(creates.items, function(i){
                $creates.append('<tr>' + 
                '<td>' + creates.items[i]["id buku"] + '</td>' + 
                '<td>' + creates.items[i]["judul buku"] + '</td>' + 
                '<td>' + creates.items[i]["nama penulis"] + '</td>' + 
                '<td>' + creates.items[i]["rating buku"] + '</td>' +  
                '<td>' + creates.items[i]["harga buku"]+'</td>' + 
                '</tr>')
            });
        },
        error: function() {
            alert('Gagal memuat daftar buku');
        }
    });

    $('#add-book').on('click', function(){

        var book = {
            id_buku: $idBuku.val(),
            judul_buku: $judulBuku.val(),
            nama_penulis: $namaPenulis.val(),
            rating_buku: $ratingBuku.val(),
            harga_buku: $hargaBuku.val(),
        };

    $.ajax({
            type: 'POST',
            url: 'https://apex.oracle.com/pls/apex/project_bdt/toko_buku/allbooks/',
            data: book,
            success:function() {
                $creates.append('<tr>' + 
                '<td>' + book.id_buku + '</td>' + 
                '<td>' + book.judul_buku + '</td>' + 
                '<td>' + book.nama_penulis + '</td>' + 
                '<td>' + book.rating_buku + '</td>' +  
                '<td>' + book.harga_buku +'</td>' + 
                '</tr>')
            },
            error:function(){
                alert('Gagal menyimpan buku');
            }
        });

    });

    
});