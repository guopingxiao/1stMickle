什么时候使用if-modified-since，什么时候使用if-none-match呢，分情况。

对实时性要求不高的静态资源可以使用if-modified-since；
资源是动态生成，如通过查数据库拼出来的html（数据库自带最后修改时间字段可以用if-modified-since）可以使用etag，
        因为这时候该文件的last-modified值永远是文件生成时间，缓存就无从谈起了。
秒级修改
某些服务不能精确得到文件的最后修改时间
一些文件会周期性的更改


分布式系统尽量关闭etag?
如果资源是走分布式服务器（比如CDN）存储的情况，需要这些服务器上计算ETag唯一值的算法保持一致，才不会导致明明同一个文件，在服务器A和服务器B上生成的ETag却不一样。


分布式系统里多台机器间文件的Last-Modified必须保持一致，以免负载均衡到不同机器导致比对失败； 分布式系统尽量关闭掉ETag(每台机器生成的ETag都会不一样）；