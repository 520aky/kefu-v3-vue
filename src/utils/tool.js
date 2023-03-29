import SparkMD5 from 'spark-md5'
/**
 * @description: 获取文件的md5值
 * @param {*
 * file:文件对象
 * chunkSize:单位大小 1024
 * }
 * @return {*}
 */
const tool = {
  md5(file, chunkSize = 1024) {
    return new Promise((resolve, reject) => {
      let blobSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice
      let chunks = Math.ceil(file.size / chunkSize)
      let currentChunk = 0
      let spark = new SparkMD5.ArrayBuffer() //追加数组缓冲区。
      let fileReader = new FileReader() //读取文件
      fileReader.onload = function (e) {
        spark.append(e.target.result)
        currentChunk++
        if (currentChunk < chunks) {
          loadNext()
        } else {
          let md5 = spark.end() //完成md5的计算，返回十六进制结果。
          resolve(md5)
          // console.log(md5);
        }
      }

      fileReader.onerror = function (e) {
        reject(e)
      }

      function loadNext() {
        let start = currentChunk * chunkSize
        let end = start + chunkSize
        if (end > file.size) {
          end = file.size
        }
        fileReader.readAsArrayBuffer(blobSlice.call(file, start, end))
      }
      loadNext()
    })
  },
}
export default tool
