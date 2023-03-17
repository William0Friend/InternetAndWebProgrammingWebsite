$(document).ready(function () {
    var form = $('<form>').attr('id', 'skeleton-form');
    var div = $('<div>').appendTo(form);

    $('<label>').attr('for', 'skeleton-select').text('Select a Skeleton:').appendTo(div);

    var select = $('<select>').attr('id', 'skeleton-select').attr('name', 'skeleton').appendTo(div);
    $('<option>').attr('value', '').text('-- Select a Skeleton --').appendTo(select);
    $('<option>').attr('value', 'classic').text('Classic Skeleton').appendTo(select);
    $('<option>').attr('value', 'disarticulated').text('Disarticulated Skeleton').appendTo(select);
    $('<option>').attr('value', 'fetal').text('Fetal Skeleton').appendTo(select);
    $('<option>').attr('value', 'halloween').text('Halloween Skeleton').appendTo(select);

    var serviceSection = $('<div>').attr('id', 'service-section').css('display', 'none').appendTo(div);
    $('<h2>').text('Additional Services:').appendTo(serviceSection);

    var maintenanceCheckbox = $('<input>').attr('type', 'checkbox').attr('id', 'maintenance-checkbox').attr('name', 'maintenance').attr('value', 'maintenance').appendTo(serviceSection);
    $('<label>').attr('for', 'maintenance-checkbox').text('Skeleton Maintenance ($50)').appendTo(serviceSection);

    $('<br>').appendTo(serviceSection);

    var paymentPlanCheckbox = $('<input>').attr('type', 'checkbox').attr('id', 'payment-plan-checkbox').attr('name', 'payment-plan').attr('value', 'payment-plan').appendTo(serviceSection);
    $('<label>').attr('for', 'payment-plan-checkbox').text('Payment Plan ($10/month)').appendTo(serviceSection);

    var paymentPlanOptions = $('<div>').attr('id', 'payment-plan-options').css('display', 'none').appendTo(serviceSection);
    $('<h3>').text('Payment Plan Options:').appendTo(paymentPlanOptions);
    $('<label>').attr('for', 'term-select').text('Term:').appendTo(paymentPlanOptions);

    var termSelect = $('<select>').attr('id', 'term-select').attr('name', 'term').appendTo(paymentPlanOptions);
    $('<option>').attr('value', '6').text('6 Months').appendTo(termSelect);
    $('<option>').attr('value', '12').text('12 Months').appendTo(termSelect);
    $('<option>').attr('value', '18').text('18 Months').appendTo(termSelect);

    $('<label>').attr('for', 'price-input').text('Skeleton Price:').appendTo(div);
    $('<input>').attr('type', 'number').attr('id', 'price-input').attr('name', 'price').attr('min', '0').attr('step', '0.01').appendTo(div);
    $('<br>').appendTo(div);

    $('<label>').attr('for', 'down-payment-input').text('Down Payment:').appendTo(div);
    $('<input>').attr('type', 'number').attr('id', 'down-payment-input').attr('name', 'down-payment').attr('min', '0').attr('step', '0.01').appendTo(div);
    $('<br>').appendTo(div);

    $('<label>').attr('for', 'interest-rate-input').text('Interest Rate:').appendTo(div);
    $('<input>').attr('type', 'number').attr('id', 'interest-rate-input').attr('name', '
