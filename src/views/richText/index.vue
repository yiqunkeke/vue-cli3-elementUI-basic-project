<template>
  <div>
    <tinymce-editor
      api-key="r22sw5efb0nfm383ump8lsqscnluxf4aa2ilj609h3uhzm0x"
      :init="options"
    ></tinymce-editor>
  </div>
</template>

<script>
import Editor from "@tinymce/tinymce-vue";
export default {
  name: "richText",
  components: {
    "tinymce-editor": Editor
  },
  data() {
    return {
      options: {
        height: 650, //编辑器高度
        min_height: 400,
        plugins:
          "print preview searchreplace autolink directionality visualblocks visualchars fullscreen image link media template code codesample table charmap hr pagebreak nonbreaking anchor insertdatetime advlist lists wordcount imagetools textpattern help emoticons autosave autoresize formatpainter",
        toolbar:
          "code undo redo restoredraft | cut copy paste pastetext | forecolor backcolor bold italic underline strikethrough link anchor | alignleft aligncenter alignright alignjustify outdent indent | \
                     styleselect formatselect fontselect fontsizeselect | bullist numlist | blockquote subscript superscript removeformat | \
                     table image media charmap emoticons hr pagebreak insertdatetime print preview | fullscreen | formatpainter",
        fontsize_formats: "12px 14px 16px 18px 24px 36px 48px 56px 72px",
        font_formats:
          "微软雅黑=Microsoft YaHei,Helvetica Neue,PingFang SC,sans-serif;苹果苹方=PingFang SC,Microsoft YaHei,sans-serif;宋体=simsun,serif;仿宋体=FangSong,serif;黑体=SimHei,sans-serif;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier;Georgia=georgia,palatino;Helvetica=helvetica;Impact=impact,chicago;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco;Times New Roman=times new roman,times;Verdana=verdana,geneva;Webdings=webdings;Wingdings=wingdings,zapf dingbats;知乎配置=BlinkMacSystemFont, Helvetica Neue, PingFang SC, Microsoft YaHei, Source Han Sans SC, Noto Sans CJK SC, WenQuanYi Micro Hei, sans-serif;小米配置=Helvetica Neue,Helvetica,Arial,Microsoft Yahei,Hiragino Sans GB,Heiti SC,WenQuanYi Micro Hei,sans-serif",
        // 预置链接
        link_list: [
          { title: "预置链接1", value: "http://www.tinymce.com" },
          { title: "预置链接2", value: "http://tinymce.ax-z.cn" }
        ],
        // 预置图片
        image_list: [
          {
            title: "预置图片1",
            value: "https://www.tiny.cloud/images/glyph-tinymce@2x.png"
          },
          {
            title: "预置图片2",
            value: "https://www.baidu.com/img/bd_logo1.png"
          }
        ],
        // 图片 class
        image_class_list: [
          { title: "None", value: "" },
          { title: "Some class", value: "class-name" }
        ],
        //自定义文件选择器的回调内容
        file_picker_callback: function(callback, value, meta) {
          if (meta.filetype === "file") {
            callback("https://www.baidu.com/img/bd_logo1.png", {
              text: "My text"
            });
          }
          if (meta.filetype === "image") {
            callback("https://www.baidu.com/img/bd_logo1.png", {
              alt: "My alt text"
            });
          }
          if (meta.filetype === "media") {
            callback("movie.mp4", {
              source2: "alt.ogg",
              poster: "https://www.baidu.com/img/bd_logo1.png"
            });
          }
        },
        //为内容模板插件提供预置模板
        templates: [
          { title: "模板1", description: "介绍文字1", content: "模板内容" },
          {
            title: "模板2",
            description: "介绍文字2",
            content:
              '<div class="mceTmpl"><span class="cdate">CDATE</span>，<span class="mdate">MDATE</span>，我的内容</div>'
          }
        ],
        template_cdate_format: "[CDATE: %m/%d/%Y : %H:%M:%S]",
        template_mdate_format: "[MDATE: %m/%d/%Y : %H:%M:%S]",
        autosave_ask_before_unload: false,
        toolbar_drawer: false,
        images_upload_base_path: "/demo",
        images_upload_handler: function(blobInfo, succFun) {
          succFun("/demo/images/img.jpg");
        }
      }
    };
  }
};
</script>

<style scoped></style>
