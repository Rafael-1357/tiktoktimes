import $ from 'jquery';
import sleep from 'sleep-promise';
import ActionType from '../types/ActionType';

async function ActionPopup({ participantInfos, actionType }: ActionType) {
    const icons = {
        join: 'door_open',
        like: 'favorite',
        share: 'share',
        follow: 'add',
        gift: 'featured_seasonal_and_gifts',
    };

    const interactionsEl = $('#interactions');
    const actionPopupEl = $(`
        <div class="action-popup" data-action-type='${actionType}'>
            <img src='${participantInfos.styles.participantImage}'>
            <span class="material-symbols-outlined">${icons[actionType]}</span>
        </div>
    `);

    actionPopupEl.appendTo(interactionsEl);
    await sleep(4400);
    actionPopupEl.remove();
}

export default ActionPopup;
