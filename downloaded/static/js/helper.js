jQuery.Class('Helper', {
    topProgressinterval: null,
    swiper: function (expr, params) {
        var settings = {
            slidersPerView: 1,
            spaceBetween: 30,
            hideOnClick: true,
            loop: true,
            speed: 1000,
            autoplay: 5000,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            on: {
                slideChange: function () {
                    if (!this.navigation.$nextEl)
                        return false;

                    if (this.isEnd) {
                        this.navigation.$nextEl.css('display', 'none');
                    } else {
                        this.navigation.$nextEl.css('display', 'block');
                    }
                },
            }
        };

        if (typeof params == 'object') {
            settings = jQuery.extend(settings, params);
        }

        var element = jQuery(expr);
        if (element.length <= 0)
            return false;

        if (jQuery(settings.pagination.el, element).length <= 0) {
            element.append('<div class="swiper-pagination"></div>');
            settings.pagination.el = '.swiper-pagination';
        }

        if (jQuery(settings.navigation.nextEl, element).length <= 0) {
            element.append('<div class="swiper-button-prev"></div>');
            settings.navigation.nextEl = '.swiper-button-next';
        }

        if (jQuery(settings.navigation.prevEl, element).length <= 0) {
            element.append('<div class="swiper-button-next"></div>');
            settings.navigation.prevEl = '.swiper-button-next';
        }

        var swiper = new Swiper(expr, settings);
        return swiper;
    },
    select2: function (element, params) {
        if (element.length > 1) {
            jQuery.each(element, function (i) {
                Helper.select2(element.eq(i), params);
            });
            return false;
        }
        var settings = {
            allowClear: false,
            placeholder: 'Please Select'
        };
        if (typeof params == 'object') {
            settings = jQuery.extend(settings, params);
        }

        if (!settings.placeholder) {
            if (element.attr('data-placeholder')) {
                settings.placeholder = element.attr('data-placeholder');
            }
        }

        if (settings.placeholder) {
            settings.allowClear = true;
        }

        if (settings.allowClear && !settings.placeholder) {
            settings.placeholder = 'Select Options';
        }

        if (jQuery('option', element).length <= 10) {
            //不显示搜索文本框
            settings.minimumResultsForSearch = -1;
        }

        settings.templateResult = function (state) {
            if (state.element) {
                if (jQuery(state.element).attr('data-level') != undefined) {
                    var level = parseInt(jQuery(state.element).attr('data-level'));
                    var padding = 20 * level;

                    return $('<div style="padding-left:' + padding + 'px;">' + state.text + '</div>');
                } else {
                    return state.text;
                }
                return $state;
            } else {
                return state.text;
            }
        };
        settings.dropdownParent = element.parent();
        element.select2(settings);
    },
    datetimepicker: function (element, params, values) {
        if (element.length > 1) {
            jQuery.each(element, function (i) {
                Helper.datetimepicker(element.eq(i), params);
            });
            return false;
        }

        var settings = {
            language: 'zh-CN',
            format: 'mm/dd/yyyy',
            minView: 2,
            autoclose: true,
            todayBtn: true,
            keyboardNavigation: true,
            todayHighlight: true,
        };
        if (typeof params == 'object') {
            settings = jQuery.extend(settings, params);
        }
        element.attr('readonly', 'readonly');
        element.datetimepicker(settings);
    },
    fileupload: function (element, params) {
        if (element.length > 1) {
            jQuery.each(element, function (i) {
                Helper.fileupload(element.eq(i), params);
            });
            return false;
        }

        var fileName = element.attr('name');
        if (fileName == '') {
            fileName = 'file';
        }
        var i = 1;
        while (jQuery('#fileUpload_' + i) > 0) {
            i++;
        }
        var elementId = 'fileUpload_' + i;
        element.wrap('<div id="' + elementId + '">' + $.i18n.map['Upload'] + '</div>');
        element.remove();

        var settings = {
            dragDrop: true,
            fileName: fileName,
            // allowedTypes: 'jpg,png',
            returnType: 'json',
            multiple: false,
            showCancel: true,
            autoSubmit: false,
            maxFileCount: 5,
            onSuccess: function (files, data, xhr) {

            },
            showDelete: true
        };
        if (typeof params == 'object') {
            settings = jQuery.extend(settings, params);
        }

        return jQuery('#' + elementId).uploadFile(settings);
    },
    showProcessing: function (parentElement) {
        if (parentElement.length <= 0)
            return false;

        var loadDiv = '<div class="GnloadingW"></div>';
        if (!parentElement.hasClass('loading-parent')) {
            //给当前loading的父级添加一个class
            parentElement.addClass('loading-parent');
        }
        parentElement.append(loadDiv);
    },
    hideProcessing: function (parentElement) {
        if (typeof parentElement == 'undefined') {
            jQuery('.GnloadingW').remove();
        } else if (parentElement.length <= 0) {
            return false;
        } else {
            parentElement.removeClass('loading-parent');
            jQuery('.GnloadingW', parentElement).remove();
        }
    },
    isMobile: function () {
        if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
            return true;
        } else {
            return false;
        }
    },
    parseUrlParams: function (query) {
        var re = /([^&=]+)=?([^&]*)/g,
            decodeRE = /\+/g,
            decode = function (str) {
                return decodeURIComponent(str.replace(decodeRE, "="));
            };

        var params = {};
        while (e = re.exec(query)) {
            params[decode(e[1])] = decode(e[2]);
        }

        return params;
    },
    joinUrlParams: function (url, params) {
        if (typeof params == 'object') {
            params = jQuery.param(params);
        }

        if (url.indexOf('?') < 0) {
            url += '?' + params;
        } else {
            var query = url.substr(url.indexOf('?') + 1);
            var _params = Helper.parseUrlParams(query);
            var params = Helper.parseUrlParams(params);

            params = jQuery.extend(_params, params);

            params = jQuery.param(params);
            url = url.substr(0, url.indexOf('?')) + '?' + params;
        }

        return url;
    },
    showFormAlert: function (form, fieldname, message, type) {
        if (jQuery('[name="' + fieldname + '"]', form).length > 0) {
            var parentDiv = jQuery('[name="' + fieldname + '"]', form).parent('div .required');
            if (parentDiv.length > 0) {
                //新的报错提示
                parentDiv.addClass('error');
            } else {
                //原来的报错提示
                var formgroup = jQuery('[name="' + fieldname + '"]', form).parents('.form-group');
                if (jQuery('.help-block', formgroup).length <= 0) {
                    formgroup.append('<span class="help-block hide"></span>');
                }
                formgroup.removeClass('has-error').removeClass('has-warning').removeClass('has-success').addClass('has-' + type);
                jQuery('.help-block', formgroup).text(message).removeClass('hide');
            }
        } else {
            Helper.errorMsg(message);
        }
    },
    hideFormAlert: function (form) {
        if (form.length > 0) {
            jQuery('.has-error,.has-warning,.has-success', form).removeClass('has-warning has-error has-success');
            jQuery('.help-block', form).remove();
        }
    },
    Msg: function (params) {
        var settings = {
            id: 'alertMsg',
            type: 'success',
            title: '',
            message: 'Successfully'
        };
        if (typeof params == 'object') {
            settings = jQuery.extend(settings, params);
        }

        var aDeferred = jQuery.Deferred();

        if (jQuery('#' + settings.id).length <= 0) {
            var d1 = jQuery('<div class="modal fade" id="' + settings.id + '" role="dialog" aria-labelledby="myModalLabel"></div>');
            d1.append('<div class="modal-dialog modal-xs modal-message" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div></div></div>');

            d1.appendTo(jQuery('body'));
        }

        var modalElement = jQuery('#' + settings.id);

        if (settings.type == 'confirm') {
            jQuery('.modal-header .modal-title-warp', modalElement).remove();
            if (jQuery('.modal-header .modal-title', modalElement).length <= 0) {
                jQuery('.modal-header', modalElement).append('<h4 class="modal-title"></h4>');
            }
            if (jQuery('.modal-body', modalElement).length <= 0) {
                jQuery('.modal-content', modalElement).append('<div class="modal-body"></div>');
            }
            if (jQuery('.modal-footer', modalElement).length <= 0) {
                jQuery('.modal-content', modalElement).append('<div class="modal-footer"><button type="button" class="btn anviz-btn-primary">' + $.i18n.map['confirm'] + '</button></div>');
            }
            jQuery('.modal-content .modal-body', modalElement).text(settings.message);
            jQuery('.modal-footer button', modalElement).click(function () {
                modalElement.modal('hide');
                aDeferred.resolve();
            });
        } else {
            jQuery('.modal-header > .modal-title', modalElement).remove();
            jQuery('.modal-footer', modalElement).remove();
            jQuery('.modal-body', modalElement).remove();
            if (jQuery('.modal-header .modal-title-warp', modalElement).length <= 0) {
                jQuery('.modal-header', modalElement).append('<div class="modal-title-warp"><span class="icon-status"></span><h4 class="modal-title"></h4></div></div>');
            }
            jQuery('.modal-header .modal-title-warp .icon-status', modalElement).removeClass('icon-success_line icon-success icon-cry_line icon-error icon-information_line icon-warning');

            var cls = '';
            if (settings.type == 'success') {
                cls = 'icon-success_line icon-success';
            } else if (settings.type == 'error') {
                cls = 'icon-cry_line icon-error';
            } else {
                cls = 'icon-information_line icon-warning';
            }
            jQuery('.modal-header .modal-title-warp .icon-status', modalElement).addClass(cls);

            settings.title = settings.message;
        }

        jQuery('.modal-header .modal-title', modalElement).text(settings.title);

        modalElement.modal('show');

        modalElement.on('hide.bs.modal', function (e) {
            aDeferred.resolve();
        });

        return aDeferred.promise();
    },
    successMsg: function (message, close_seconds = 5) {
        var aDeferred = jQuery.Deferred();

        var settings = {
            type: 'success',
            title: '',
            message: 'Successfully'
        };
        if (typeof message == 'string') {
            settings.message = message;
        }

        if (!this.isEmpty(close_seconds)) {
            var old_message = settings.message;
            settings.message = old_message + '　　' + close_seconds + 's';
            var func = function () {
                if (close_seconds <= 1) {
                    //时间到，关闭弹框
                    jQuery('#alertMsg').find('button.close').trigger('click');
                } else {
                    close_seconds--;
                    //弹框倒计时
                    jQuery('#alertMsg').find('h4.modal-title').text(old_message + '　　' + close_seconds + 's');
                    setTimeout(func, 1000);
                }
            };
            setTimeout(func, 1000);
        }

        Helper.Msg(settings).done(function () {
            aDeferred.resolve();
        });

        return aDeferred.promise();
    },
    warningMsg: function (message, close_seconds = 5) {
        var aDeferred = jQuery.Deferred();

        var settings = {
            type: 'warning',
            title: '',
            message: 'Warning'
        };
        if (typeof message == 'string') {
            settings.message = message;
        }

        if (!this.isEmpty(close_seconds)) {
            var old_message = settings.message;
            settings.message = old_message + '　　' + close_seconds + 's';
            var func = function () {
                if (close_seconds <= 1) {
                    //时间到，关闭弹框
                    jQuery('#alertMsg').find('button.close').trigger('click');
                } else {
                    close_seconds--;
                    //弹框倒计时
                    jQuery('#alertMsg').find('h4.modal-title').text(old_message + '　　' + close_seconds + 's');
                    setTimeout(func, 1000);
                }
            };
            setTimeout(func, 1000);
        }

        Helper.Msg(settings).done(function () {
            aDeferred.resolve();
        });

        return aDeferred.promise();
    },
    errorMsg: function (message) {
        var aDeferred = jQuery.Deferred();

        var settings = {
            type: 'error',
            title: '',
            message: 'Error'
        };
        if (typeof message == 'string') {
            settings.message = message;
        }

        Helper.Msg(settings);
        aDeferred.resolve();
        return aDeferred.promise();
    },
    pageProgressing: function () {
        var bodyWidth = jQuery('body').width();
        var element = jQuery('.progress-bar');
        element.removeClass('hide');
        element.width(bodyWidth * 0.2);

        var n = 1;
        Helper.topProgressinterval = setInterval(function () {
            n++;
            var w = n * 0.2 * bodyWidth;
            if (w >= bodyWidth) {
                w = bodyWidth;
            }
            element.css({width: w + 'px'});
            if (w >= bodyWidth) {
                clearInterval(Helper.topProgressinterval);
            }
        }, 1000);
    },
    pageHideProgressing: function () {
        clearInterval(Helper.topProgressinterval);
        var element = jQuery('.progress-bar');
        element.width(0);
        element.addClass('hide');
    },
    isEmail: function (email) {
        var emailReg = /^[a-zA-Z0-9!#$%&\'*+\\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&\'*+\\/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/;
        if (emailReg.test(email)) {
            return true;
        } else {
            return false;
        }
    },

    //判断元素是否已经隐藏，已经隐藏返回true，没有隐藏返回false
    isHidden: function (element) {
        if (typeof element == 'string') {
            element = jQuery(element);
        }
        if (element.css('display') == 'none') {
            return true;
        }
        if (element.is(':hidden')) {
            return true;
        }
        return false;
    },

    //邮箱 部分用*代替
    encryptedMailBox(email) {
        if (String(email).indexOf('@') > 0) {
            var str = email.split('@');
            console.log(str);
            var _s = '';
            var new_email = "";
            if (str[0].length > 3) { //@前面多于3位
                for (var i = 3; i < str[0].length; i++) {
                    _s += '*';
                }
                new_email = str[0].substr(0, 3) + _s + '@' + str[1];
            } else { //@前面小于等于于3位
                for (var i = 1; i < str[0].length; i++) {
                    _s += '*'
                }
                new_email = str[0].substr(0, 1) + _s + '@' + str[1];
            }
        }
        return new_email;
    },

    //判断字符或者数组，是否为空的方法
    isEmpty: function (obj) {
        if (typeof obj == "undefined" || obj == null || obj == "" || obj.length == 0) {
            return true;
        } else {
            return false;
        }
    },

    /**
     * 验证表单：对于必填字段，要求不能为空；对于有格式论证的字段，格式必须正确。否则，添加标记类error。
     * 当这些有标记的表单元素，获得焦点的时候，移除标记类error
     */
    validateForm: function (form, loadingText) {
        if (typeof form == 'string') {
            form = jQuery(form);
        }

        form.on(App.formBeforeSubmit, function () {
            var validateFlag = false;

            //只要点击提交，马上改变按钮的样式
            jQuery('[type="submit"]', form).addClass('btn-loading');
            jQuery('[type="submit"]', form).attr('disabled', 'disabled');

            if (!Helper.isEmpty(loadingText)) {
                jQuery('[type="submit"]', form).text(loadingText);
                jQuery('[type="submit"]', form).val(loadingText);
            }

            jQuery('div.radio_required',form).each(function(){
                if (Helper.isHidden(jQuery(this).parent())) {
                    //跳过本次循环
                    return true;
                }
                var value =  (jQuery('input:checked', this).val());
                if (Helper.isEmpty(value)) {
                    jQuery(this).addClass('error');
                    validateFlag = true;
                }

            });
            //表单域在div.required里面的，检查是否有值，值是否符合格式。验证不通过的，添加类error标记
            jQuery('div.required', form).each(function () {
                //如果父元素是隐藏的，跳过本次循环
                if (Helper.isHidden(jQuery(this).parent())) {
                    //跳过本次循环
                    return true;
                }

                var value = jQuery('input,textarea,select', this).val();
                console.log(value);
                if (Helper.isEmpty(value)) {
                    jQuery(this).addClass('error');
                    validateFlag = true;
                }

                /**
                 * 如果checkbox如果是必选项。
                 * 也就是说，有label.checkbox-warp没有checked，且有input[type="checkbox"]
                 */
                if (!jQuery('label.checkbox-warp', this).hasClass('checked') && jQuery(this).find('input[type="checkbox"]').length > 0) {
                    jQuery(this).addClass('error');
                    validateFlag = true;
                }

                // if (!jQuery('radio_type', this).hasClass('checked') && jQuery(this).find('input[type="checkbox"]').length > 0) {
                //     jQuery(this).addClass('error');
                //     validateFlag = true;
                // }

                var name = jQuery('input', this).attr('name');

                //当邮箱有值，验证值的邮箱格式
                if (name == 'email') {
                    if (!Helper.isEmail(value)) {
                        jQuery(this).addClass('error');
                        validateFlag = true;
                    }
                }
            });

            if (validateFlag) {
                return false;
            }

            /**
             * 如果是static_page页面里面的验证码，进if里面
             * 验证码正确，才能提交表单数据
             * async: false,同步执行验证码验证操作。
             * 也就是说，只有验证码有了结果，才能考虑是否执行表单提交动作
             */
            if (jQuery('input[name="security_code"]', form).attr('data-is_static_page') == 'yes') {
                var security_code = jQuery('input[name="security_code"]', form).val();
                var very_url = webUrl + '/mycaptcha/index/verifyCode';
                var data = {security_code: security_code};

                //验证码是否通过，默认false
                var verify_is_success_flag = false;

                //同步校验验证码是否正确
                $.ajax({
                    type: 'get',
                    url: very_url,
                    async: false,       //非常重要，这里必须是false，表示：同步
                    data: data,
                    dataType: 'json',
                    success: function (data) {
                        //验证码验证失败
                        if (data.success == true) {
                            verify_is_success_flag = true;
                        } else {
                            verify_is_success_flag = false;
                        }
                    },
                    error: function (data) {
                        verify_is_success_flag = false;
                    }
                });

                //如果验证不通过，就将form表单提交功能恢复，并且阻止提交数据
                if (verify_is_success_flag == false) {
                    jQuery('[type="submit"]', form).removeAttr('disabled');
                    form.removeData('submit');

                    //错误就显示红色，框变红
                    jQuery('input[name="security_code"]', form).parent('div.required').addClass('error');

                    //验证不通过，刷新验证码。验证通过刷新验证码，在app.js成功的时候，已经实现过
                    jQuery('#yw0').trigger('click');

                    //阻止提交数据：这里return的值，可以通过beforeSubmitEvent.result获取到
                    return false;
                }
            }
        });

        /**
         * 公用，提取出来
         */
        function removeErrorClass(element) {
            var divRequiredElement = jQuery(element);
            jQuery('input,textarea', element).focus(function () {
                divRequiredElement.removeClass('error');
            });

            jQuery('select', element).on('select2:open', function () {
                divRequiredElement.removeClass('error');
            });
        }

        /**
         * leave a message 里面会出现,这时候的结构是li  div
         * 各种必填项，里面的表单元素一旦获得焦点，那么就移除类error标记
         * 只要是form表单li下的div，都有error的可能。
         * 只要它里面的表单获得焦点，上级的div就去掉error，不管是否必填。这样不是required的div，当未来变为required的时候，也能包含进来
         *
         * https://www.anviz.com/form/rma.html，由于这个页面获得焦点，都是【未来】的元素
         * 所以，调整代码，兼容【未来】的元素
         */
        jQuery(form).on('focus', 'li div.required input,textarea', function () {
            jQuery(this).parents('div.required').removeClass('error');
        });
        jQuery(form).on('select2:open', 'li div.required select', function () {
            jQuery(this).parents('div.required').removeClass('error');
        });

        /**
         * static_page页面会用到，如：partners.html，这时候的结构没用到li，而是div.required
         */
        if (jQuery('li div', form).length == 0) {
            jQuery('div.required', form).each(function () {
                removeErrorClass(this);
            });
        }
    },

    //js的sleep效果，同步阻塞，调用php的sleep函数实现
    sleep: function (time) {
        var url = webUrl + '/fish/index/sleep';
        var data = {time: time};

        //同步校验验证码是否正确
        $.ajax({
            type: 'get',
            url: url,
            async: false,       //非常重要，这里必须是false，表示：同步
            data: data,
            dataType: 'json',
            success: function (data) {
                //验证码验证失败
                console.log(data);
            },
            error: function (data) {

            }
        });
    },

    /**
     * 初始化upload按钮，让美化之后的upload起作用：
     * 1、隐藏真正的upload按钮，让美化后的upload按钮生效
     * 2、当选择取消upload的内容时，能重置提示内容
     */
    init_upload: function () {
        var upload_default_text = $('.file-upload span').first().text();
        $('.file-upload').on('click', function () {
            $(this).next('.file').click();
        });
        $('input.file').on('change', function () {
            if ($(this).val() == '') {
                $(this).prev().find('span').text(upload_default_text);
                return false;
            }
            $(this).prev().find('span').text($(this).val());
        });
    },

    /**
     * 重置表单，因为有些表单，因为提交的时候没有登录，登录后返回表单页面，表单输入元素的初始值已经不为空了
     * 所以，重置表单，不仅仅是重置为初始值，更是要清空这些值
     */
    reset_our_form(form) {
        if (typeof form == 'string') {
            form = jQuery(form);
        }

        jQuery('[type="text"],[type="email"],[type="tel"]', form).each(function () {
            jQuery(this).val('');
        });



        jQuery('textarea', form).text('');

        $('select', form).val('').trigger("change");

        jQuery('#contentWords').text(0);

        //checkbox去掉勾
        jQuery('[type="checkbox"]', form).parents('label.checkbox-warp').removeClass('checked');
    },
}, {});

jQuery.fn.showProcessing = function () {
    Helper.showProcessing(jQuery(this));
};
jQuery.fn.hideProcessing = function () {
    Helper.hideProcessing(jQuery(this));
};
jQuery.fn.showError = function (title, message) {
    var element = jQuery(this);
    if (title == 'hide') {
        if (element.get(0).tagName.toLowerCase() == 'form') {
            Helper.hideFormAlert(element);
        }
    } else {
        if (element.get(0).tagName.toLowerCase() == 'form') {
            Helper.showFormAlert(element, title, message, 'error')
        } else {
            Helper.errorMsg(message);
        }
    }
};