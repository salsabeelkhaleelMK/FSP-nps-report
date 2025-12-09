import { useLanguage } from '../context/LanguageContext';
import { Eye, Plus, ArrowDown, ArrowUp, Edit, Shuffle, Ban, ChevronDown } from 'lucide-react';

/**
 * Questions Settings page - replicates the original page shown in the screenshot
 */
export function QuestionsSettings({ className = '' }) {
  const { t } = useLanguage();

  const services = [
    'Online purchase',
    'Body Repair',
    'Aftersale mobile',
    'long term rental',
    'Accessories',
    'Purchase used vehicle',
    'Purchase new vehicle',
    'Trade-in',
    'Short term rental',
    'After sales',
    'Technical control',
    'Spare parts',
    'Glazing',
  ];

  return (
    <div className={`questions-settings ${className}`}>
      <h1 className="page-title">{t('page_title_surveys')}</h1>
      
      <div className="service-selector">
        <div className="service-selector-content">
          <label className="service-label">{t('service')}</label>
          <div className="select-wrapper large">
            <select className="service-select">
              <option>Online purchase</option>
              {services.slice(1).map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
            <ChevronDown size={20} className="select-arrow" />
          </div>
        </div>
        <button className="see-btn">
          <Eye size={18} />
          <span>{t('see')}</span>
        </button>
      </div>

      <div className="questions-table">
        <div className="questions-table-header">
          <div className="col-number">#</div>
          <div className="col-title">{t('title')}</div>
          <div className="col-answer-type">{t('type_of_answer')}</div>
          <div className="col-survey-type">{t('survey_type')}</div>
          <div className="col-service">
            {t('service')}
            <button className="add-btn">
              <Plus size={16} />
              <span>{t('add')}</span>
            </button>
          </div>
        </div>

        <div className="questions-table-body">
          <div className="question-row">
            <div className="col-number">1</div>
            <div className="col-title">
              <div className="question-content">
                <strong>Main note</strong>
                <p>On a scale of 1 to 10, how likely are you to recommend this representative to a friend or colleague?</p>
              </div>
            </div>
            <div className="col-answer-type">Grade</div>
            <div className="col-survey-type">
              <ul className="survey-type-list">
                <li>Fidcar Certified</li>
              </ul>
            </div>
            <div className="col-service">
              <ul className="service-list">
                {services.map((s) => (
                  <li key={s}>• {s}</li>
                ))}
              </ul>
              <div className="row-actions">
                <button className="action-btn down"><ArrowDown size={16} /></button>
                <button className="action-btn up"><ArrowUp size={16} /></button>
                <button className="action-btn edit"><Edit size={16} /></button>
                <button className="action-btn shuffle"><Shuffle size={16} /></button>
                <button className="action-btn ban"><Ban size={16} /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionsSettings;

