$.getJSON("/data/android.json", function (result) {
    $.each(result, function (index, value) {
        $("#android").append(`<div class="mdui-panel" mdui-panel>
            <div class="mdui-panel-item mdui-panel-item-open" id="${value.version}">
                <div class="mdui-panel-item-header">
                    <div class="mdui-panel-item-title mdui-typo-headline">
                        ${value.version}
                    </div>
                    <div class="mdui-toolbar-spacer">
                    ${value.additional}
                    </div>
                    <div class="mdui-panel-item-summary">
                        ${value.title}
                    </div>
                </div>
                <div class="mdui-panel-item-body">
                    <p>更新日志：${value.changelog}</p>
                    <p>上传时间：${value.upload_date}</p>
                    <p>文件大小：${value.file_size}</p>
                    <div class="mdui-panel-item-actions"><a href="${value.download_url}"> <button class="mdui-btn mdui-ripple mdui-btn-raised mdui-btn-dense mdui-color-blue-accent"> 下载 </button> </a>
                    </div>
                </div>
            </div>
        </div>`)
    })
})

$.getJSON("/data/ios.json", function (result) {
    $.each(result, function (index, value) {
        $("#ios").append(`<div class="mdui-panel" mdui-panel>
            <div class="mdui-panel-item mdui-panel-item-open" id="${value.version}">
                <div class="mdui-panel-item-header">
                    <div class="mdui-panel-item-title mdui-typo-headline">
                        ${value.version}
                    </div>
                    <div class="mdui-toolbar-spacer">
                    </div>
                    <div class="mdui-panel-item-summary">
                        ${value.title}
                    </div>
                </div>
                <div class="mdui-panel-item-body">
                    <p>更新日志：${value.changelog}</p>
                    <p>上传时间：${value.upload_date}</p>
                    <p>文件大小：${value.file_size}</p>
                    <div class="mdui-panel-item-actions"><a href="${value.download_url}"> <button class="mdui-btn mdui-ripple mdui-btn-raised mdui-btn-dense mdui-color-blue-accent"> 下载 </button> </a>
                    </div>
                </div>
            </div>
        </div>`)
    })
})

$.getJSON("/data/windows.json", function (result) {
    $.each(result, function (index, value) {
        $("#windows").append(`<div class="mdui-panel" mdui-panel>
            <div class="mdui-panel-item mdui-panel-item-open" id="${value.version}">
                <div class="mdui-panel-item-header">
                    <div class="mdui-panel-item-title mdui-typo-headline">
                        ${value.version}
                    </div>
                    <div class="mdui-toolbar-spacer">
                    </div>
                    <div class="mdui-panel-item-summary">
                        ${value.title}
                    </div>
                </div>
                <div class="mdui-panel-item-body">
                    <p>更新日志：${value.changelog}</p>
                    <p>上传时间：${value.upload_date}</p>
                    <p>文件大小：${value.file_size}</p>
                    <div class="mdui-panel-item-actions"><a href="${value.download_url}"> <button class="mdui-btn mdui-ripple mdui-btn-raised mdui-btn-dense mdui-color-blue-accent"> 下载 </button> </a>
                    </div>
                </div>
            </div>
        </div>`)
    })
})

$.getJSON("/data/official.json", function (result) {
    $.each(result, function (index, value) {
        $("#official").append(`<div class="mdui-panel" mdui-panel>
            <div class="mdui-panel-item mdui-panel-item-open" id="${value.version}">
                <div class="mdui-panel-item-header">
                    <div class="mdui-panel-item-title mdui-typo-headline">
                        ${value.version}
                    </div>
                    <div class="mdui-toolbar-spacer">
                    </div>
                    <div class="mdui-panel-item-summary">
                        ${value.title}
                    </div>
                </div>
                <div class="mdui-panel-item-body">
                    <p>介绍：${value.changelog}</p>
                    <p>${value.upload_date}</p>
                    <p>${value.file_size}</p>
                    <div class="mdui-panel-item-actions"><a href="${value.download_url}"> <button class="mdui-btn mdui-ripple mdui-btn-raised mdui-btn-dense mdui-color-blue-accent"> 前往 </button> </a>
                    </div>
                </div>
            </div>
        </div>`)
    })
})